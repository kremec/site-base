import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    series: z.string(),
    partInSeries: z.number().optional(),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { blog };
