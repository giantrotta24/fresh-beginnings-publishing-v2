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
