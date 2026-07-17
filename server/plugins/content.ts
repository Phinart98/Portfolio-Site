import readingTime from 'reading-time'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      const frontmatterRegex = /^---\n([\s\S]*?)\n---/
      const match = file.body.match(frontmatterRegex)

      // Reading time should reflect what a reader actually reads, so strip
      // everything that renders invisibly: frontmatter, image syntax, link
      // URLs, MDC attribute blocks, template interpolations, HTML tags and
      // entities, and markdown punctuation. Images get a viewing allowance
      // instead of having their alt text counted as prose.
      const imageCount = (file.body.match(/!\[[^\]]*\]\([^)]*\)/g) || []).length
      const readable = file.body
        .replace(frontmatterRegex, ' ')
        .replace(/!\[[^\]]*\]\([^)]*\)(\{[^}]*\})?/g, ' ')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/\{\{[^}]*\}\}/g, ' ')
        .replace(/\{[^}]*\}/g, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&\w+;/g, ' ')
        .replace(/^#+\s/gm, '')
        .replace(/^---+\s*$/gm, ' ')
        .replace(/[*_`>|#]/g, '')

      // 238 wpm is the average adult silent-reading speed for English
      // non-fiction (Brysbaert 2019); 12s per image follows Medium's rule.
      const stats = readingTime(readable, { wordsPerMinute: 238 })
      const minutes = Math.max(1, Math.round(stats.minutes + imageCount * 0.2))

      if (match) {
        const updatedFrontmatter = match[1] + `\nreadingTime: "${minutes} min read"\nwordCount: ${stats.words}`
        file.body = file.body.replace(frontmatterRegex, `---\n${updatedFrontmatter}\n---`)
      }
    }
  })
})
