// Things Philip has built and is willing to stand behind. List a project only
// once it does well in the real world: say how in `impact`, in plain words.
// While SHOW_PROJECTS in flags.mjs is false the page isn't built at all, so
// these examples are safe to keep or replace.
export type Project = {
  name: string;
  what: string;       // one sentence on what it is and who it's for
  impact: string;     // the real-world result that earns it a place here
  href: string;       // the live product, or its repository
  status: 'Live' | 'In progress';
};

export const PROJECTS: Project[] = [
  {
    name: 'Example project',
    what: 'One sentence on what it does and who it is for.',
    impact: 'The result that earns it a place here, such as how many people use it each month.',
    href: 'https://example.com',
    status: 'Live',
  },
  {
    name: 'Another example',
    what: 'A second project, written the same way.',
    impact: 'What changed for the people who use it.',
    href: 'https://example.com',
    status: 'In progress',
  },
];
