// Navigation data — kept separate from markup so Header/Footer stay declarative.
// Careers, Press, and Shop are deliberately omitted (dissolved LLC, duplicate-content
// placeholder pages on the live site) and must not be re-added without a content decision.

import { BOOK, SOCIAL_LINKS } from './consts';

export const NAV_LINKS = [
  { text: 'About us', href: '/about' },
  {
    text: 'Our work',
    links: [{ text: 'Rusty the Raccoon', href: BOOK.url }],
  },
  { text: 'Blog', href: '/blog' },
  { text: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  product: [{ text: 'Rusty the Raccoon', href: BOOK.amazonUrl }],
  company: [
    { text: 'About', href: '/about' },
    { text: 'Blog', href: '/blog' },
  ],
};

export const SOCIAL = SOCIAL_LINKS;

// Shared inline SVG path data for social icons (no icon package, zero client JS).
// YouTube is stroke-based and rendered separately where used.
export const SOCIAL_ICON_PATHS: Record<string, string> = {
  instagram:
    'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
  facebook: 'M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7',
};
