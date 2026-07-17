// Site-wide configuration — single source of truth for name, URLs, and SEO defaults.

export const SITE = {
  name: 'Fresh Beginnings Publishing',
  origin: 'https://www.freshbeginningspublishing.com',
  defaultTitle: 'Fresh Beginnings Publishing',
  titleTemplate: '%s | Fresh Beginnings Publishing',
  description:
    'Fresh Beginnings Publishing is a small, independent publishing company dedicated to bringing joy and inspiration to children through captivating storytelling. Our debut publication, "Rusty the Raccoon," is a heartwarming tale that follows Rusty\'s courageous journey of overcoming his fear of the dark.',
  language: 'en',
  ogImage: '/images/og-card.png',
};

export const BOOK = {
  title: 'Rusty the Raccoon is Scared of the Dark',
  author: 'Michelle Trotta',
  url: 'https://www.rustytheraccoon.com/',
  amazonUrl:
    'https://www.amazon.com/Rusty-Raccoon-Scared-Michelle-Trotta/dp/B0CJ44D6NK?crid=69SBI4UNFJJC&keywords=rusty+the+raccoon+is+scared+of+the+dark&qid=1699735695&sprefix=rusty+the+raccoo,aps,70&sr=8-1',
};

export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/groups/360330059436123',
    icon: 'facebook',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@freshbeginningspublishing',
    icon: 'youtube',
  },
] as const;

export const CONTACT_EMAIL = 'freshbeginningspublishing@gmail.com';
