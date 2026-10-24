// The home page note. Write links as [text](url); they're the
// page's navigation, so each one should point somewhere worth going.
import { SITE } from './site';

const email = `mailto:${SITE.email}`;

export const NOTE = {
  heading: "Hi, I'm Philip.",

  paragraphs: [
    "I'm a software engineer at [PAiCore Technology](https://paicore.tech/), where I work on telecom systems.",
    "Outside work, I spend a lot of my time on open source and side projects. I care about building software that is impactful, inclusive and accessible, which led me to [accessibility work in Django](/blog/the-djangonaut-space-program-a-recap) and, more recently, [a backend that helps patients share their health records](/blog/gsoc-with-data-for-the-common-good-the-final-report) with childhood cancer researchers.",
    `I also [write about what I learn](/blog). If you'd like to work together or just talk, [email me](${email}).`,
  ],
};
