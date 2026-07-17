import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog collection — zero entries today (the live site's /blog is a "Coming Soon"
// placeholder). The loader/schema exist now so dropping a .md file into
// src/content/blog/ is all that's needed to publish a post later. Add an RSS
// feed (@astrojs/rss) once there's real content to feed.
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
