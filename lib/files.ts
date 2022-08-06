import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { dateSortDesc } from '@/lib/utils'
import { GrayMatter, Post } from '@/lib/types'
import { mdxToHtml } from '@/lib/mdx'

const root = process.cwd();

const pipe = (...fns: Function[]) => (x: any) => fns.reduce((v, f) => f(v), x)

function flattenArray(input: any[]) {
  return input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])
}

function map(fn: Function): Function {
  return (input: any) => input.map(fn)
}

function walkDir(fullPath: string) {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath)
}

function pathJoinPrefix(prefix: string): (extraPath: string) => string {
  return (extraPath) => path.join(prefix, extraPath)
}

export function getAllFilesRecursively(folder: string): string[] {
  return pipe(fs.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder)
}

/**
 * Returns all file slugs in the provided subdirectory of the data directory recursively
 * @param subdirectory
 */
export function getFiles(subdirectory: string): string[] {
  const prefixPaths = path.join(root, 'data', subdirectory)
  const files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'))
}

/**
 * Returns a serialized md[x] file from the data subdirectory
 * @param subdirectory
 * @param slug
 */
export async function getFileBySlug(subdirectory: string, slug: string): Promise<Post> {
  const mdxPath = path.join(root, 'data', subdirectory, `${slug}.mdx`)
  const mdPath = path.join(root, 'data', subdirectory, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  const { data: frontmatter } = matter(source)
  const mdx = await mdxToHtml(source)

  return {
    html: mdx.html,
    frontMatter: {
      ...frontmatter,
      readingTime: mdx.readingTime,
      wordCount: mdx.wordCount,
      slug,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    },
  }
}


/**
 * Removes md and mdx from the slug
 * @param slug
 */
export function formatSlug(slug: string): string {
  return slug.replace(/\.(mdx|md)/, '')
}


/**
 * Retrieves front matter for all files in the provided subdirectory of the data directory
 * @param subdirectory
 */
export async function getAllFilesFrontMatter(subdirectory: string) {
  const prefixPaths = path.join(root, 'data', subdirectory)

  const files = getAllFilesRecursively(prefixPaths)

  const allFrontMatter: GrayMatter[] = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}