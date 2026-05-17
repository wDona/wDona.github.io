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

const proyectosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string().optional(),
    summary: z.string().optional(),
    link: z.string(),
    linkdescarga: z.string().optional(),
    highlight: z.boolean().optional(),
    tecnologias: z.array(
      z.object({
        name: z.string(),
        img: z.string()
      })
    ).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  proyectos: proyectosCollection,
};