import readingTime from 'reading-time';

// Reading time should reflect what a reader actually reads, so strip
// everything that renders invisibly: image syntax, link URLs, attribute
// blocks, HTML tags and entities, and markdown punctuation. Images get a
// viewing allowance instead of having their alt text counted as prose.
export function remarkReadingTime() {
  return function (_tree, file) {
    const body = String(file.value).replace(/^---\n[\s\S]*?\n---/, ' ');
    const imageCount = (body.match(/!\[[^\]]*\]\([^)]*\)/g) || []).length;
    const readable = body
      .replace(/!\[[^\]]*\]\([^)]*\)(\{[^}]*\})?/g, ' ')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\{\{[^}]*\}\}/g, ' ')
      .replace(/\{[^}]*\}/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&\w+;/g, ' ')
      .replace(/^#+\s/gm, '')
      .replace(/^---+\s*$/gm, ' ')
      .replace(/[*_`>|#]/g, '');

    // 238 wpm is the average adult silent-reading speed for English
    // non-fiction (Brysbaert 2019); 12s per image follows Medium's rule.
    const stats = readingTime(readable, { wordsPerMinute: 238 });
    const minutes = Math.max(1, Math.round(stats.minutes + imageCount * 0.2));

    file.data.astro.frontmatter.readingTime = `${minutes} min read`;
    file.data.astro.frontmatter.wordCount = stats.words;
  };
}
