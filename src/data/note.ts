// The home page note, in two voices. Write links as [text](url); they're the
// page's navigation, so each one should point somewhere worth going.
import { SITE } from './site';

const email = `mailto:${SITE.email}`;

export const NOTE = {
  heading: "Hi, I'm Philip.",

  engineer: [
    "I'm a software engineer at [PAiCore Technology](https://paicore.tech/), where I work on telecom systems.",
    "Outside work, I spend a lot of my time on open source and side projects. I care about building software that is impactful, inclusive and accessible, which led me to [accessibility work in Django](/blog/the-djangonaut-space-program-a-recap) and, more recently, [a backend that helps patients share their health records](/blog/gsoc-with-data-for-the-common-good-the-final-report) with childhood cancer researchers.",
    `I also [write about what I learn](/blog). If you'd like to work together or just talk, [email me](${email}).`,
  ],

  plain: [
    "I'm a software engineer at [PAiCore Technology](https://paicore.tech/). I help build the systems that let phone networks deliver messages and connect to apps.",
    'Outside work, I help build free software that anyone can use, along with my own side projects. I care about software that makes a difference and works for everyone, including people who use tools like screen readers. Recently I helped build [a tool that lets patients share their medical records with childhood cancer researchers](/blog/gsoc-with-data-for-the-common-good-the-final-report).',
    `I also [write about what I learn](/blog). If you'd like to talk, [email me](${email}).`,
  ],
};
