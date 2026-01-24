import readingTime from 'reading-time'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file) => {
    if (file._id.endsWith('.md')) {
      const stats = readingTime(file.body)

      // Inject reading time into markdown frontmatter
      const frontmatterRegex = /^---\n([\s\S]*?)\n---/
      const match = file.body.match(frontmatterRegex)

      if (match) {
        const updatedFrontmatter = match[1] + `\nreadingTime: "${stats.text}"\nwordCount: ${stats.words}`
        file.body = file.body.replace(frontmatterRegex, `---\n${updatedFrontmatter}\n---`)
      }
    }
  })
})
