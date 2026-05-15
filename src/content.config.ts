import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    keywords: z.string().optional(),
    footerText: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};