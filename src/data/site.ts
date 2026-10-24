// Black and white edit of Philip_headshot3.jpeg (the colour original is kept
// next to it), toned so the photo sits quietly beside the note.
import heroImage from '../assets/img/Philip_headshot3-bw.jpg';
import { SHOW_PROJECTS } from './flags.mjs';

export const SITE = {
  name: 'Philip Narteh',
  title: 'Philip Narteh, software engineer',
  description:
    'Philip Narteh is a software engineer who works on telecom systems and contributes to open source, with a focus on software that is impactful, inclusive and accessible.',
  url: 'https://www.philipnarteh.me',
  email: 'phinart98@gmail.com',
  gaId: 'G-BCZF1LTT3V',
  // Swap this for a newer photo whenever there is one; nothing else in the
  // design depends on which photo it is.
  heroImage,
  heroAlt: 'Philip Narteh',
  SHOW_PROJECTS,
};

export const NAV = [
  { href: '/blog', label: 'Writing' },
  ...(SITE.SHOW_PROJECTS ? [{ href: '/projects', label: 'Projects' }] : []),
  { href: '/talks', label: 'Talks' },
  { href: '/certifications', label: 'Certifications' },
];

export const SOCIALS = [
  { href: `mailto:${SITE.email}`, label: 'Email' },
  { href: 'https://github.com/Phinart98', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/philipnarteh/', label: 'LinkedIn' },
  { href: 'https://x.com/NiiOtuNarteh', label: 'X' },
  { href: 'https://www.credly.com/users/philip-narteh', label: 'Credly' },
];

