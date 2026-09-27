import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    keywords: z.string().optional(),
    footerText: z.string().optional(),
  }),
});

const proyectosCollection = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    img: z.string().optional(),
    cover: z.enum(['chat', 'interprete', 'todo', 'impostor', 'burntout']).optional(),
    summary: z.string().optional(),
    link: z.string(),
    linkdescarga: z.string().optional(),
    highlight: z.boolean().optional(),
    plataformas: z.array(z.enum(['linux', 'windows', 'android', 'ios', 'web'])).optional(),
    tecnologias: z.array(
      z.object({
        name: z.string(),
        img: z.string()
      })
    ).optional(),
  }),
});

// English translations: same id as the Spanish entry, only the translatable fields
const blogEnCollection = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/blog/en' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    footerText: z.string().optional(),
  }),
});

const proyectosEnCollection = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/proyectos/en' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  proyectos: proyectosCollection,
  blogEn: blogEnCollection,
  proyectosEn: proyectosEnCollection,
};