# Philip Narteh - Personal Website

My personal website and blog, built with Astro and Tailwind CSS.

**Live site**: [philipnarteh.me](https://www.philipnarteh.me)

## Development

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:4321
npm run build      # build the static site into dist/
npm run preview    # serve dist/ locally
```

The site deploys to Vercel. `vercel.json` sets `cleanUrls` and `trailingSlash: false`, so `/blog/some-post` keeps working exactly as it did on the old site.

## Writing a post

1. Add a markdown file to `src/content/blog/`. Start the name with the next number so the folder stays in order, for example `12.my-new-post.md`. The number is dropped from the URL, so this post lives at `/blog/my-new-post`.
2. Start the file with this frontmatter:

   ```yaml
   ---
   title: 'The title shown in lists and on the page'
   description: 'One or two sentences for the writing page, search results and RSS.'
   date: 2026-11-01
   ---
   ```

   Optional fields:

   ```yaml
   heading: 'A longer page title, if it should differ from the list title'
   series:
     name: 'Bytes, Pipelines & Queries'
     part: 6
   ```

   A new series also needs a one-line summary in `src/data/series.ts`, which the writing page shows above its parts.

3. Write the post in plain markdown below the frontmatter. Don't add the title, date or reading time yourself, because the page shows those for you.

Reading time is worked out automatically from the post's word count (238 words a minute, plus 12 seconds for each image).

**Images** go in `public/blog-images/` and are linked like `![What the image shows](/blog-images/my-image.png)`. Always write real alt text. Images get a soft background and rounded corners from the site's styles, so no extra attributes are needed.

## Adding a talk

Add a file to `src/content/talks/` and put its photos in `src/assets/img/talks/`:

```yaml
---
title: 'Talk title'
description: 'One sentence about the talk.'
event: 'Event name'
date: 2026-11-01
venue: 'City, Country'
tags: ['Topic']
eventLink: 'https://event.example'        # optional
talkLink: 'https://event.example/session' # optional
slidesLink: 'https://slides.example'      # optional
headerImage: '../../assets/img/talks/header.jpeg'
gallery:
  - src: '../../assets/img/talks/photo-1.jpeg'
    alt: 'What the photo shows'
---
```

## Editing the home page

The home page copy lives in `src/data/`:

- `note.ts` holds the introduction in two versions, one for engineers and one for people new to tech. Write links as `[text](url)`.
- `highlights.ts` holds the highlights and the education line.
- `site.ts` holds the photo, social links, email and analytics id.
- `certifications.ts` holds the certifications and their Credly links.
