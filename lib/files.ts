import path from 'path'
import fs from 'fs'

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