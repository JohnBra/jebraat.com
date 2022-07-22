import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import GithubSlugger from 'github-slugger'

export default function remarkTocHeadings(options: any) {
  return (tree: any) =>
    visit(tree, 'heading', (node, index, parent) => {
      const textContent = toString(node)
      options.exportRef.push({
        value: textContent,
        url: '#' + GithubSlugger.slug(textContent),
        depth: node.depth,
      })
    })
}