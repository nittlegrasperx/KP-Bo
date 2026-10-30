import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const articles = defineCollection({loader: glob({pattern: '**/*.{md,mdx}', base: './src/content/articles'}), schema: z.object({title:z.string(),description:z.string(),date:z.coerce.date(),lang:z.enum(['en','th']),category:z.string(),readingTime:z.string().optional(),featured:z.boolean().default(false)})});
export const collections = { articles };
