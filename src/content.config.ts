import { defineCollection, z } from "astro:content";

const profile = defineCollection({
  schema: z.object({
    lang: z.enum(["zh", "en"]),
    name: z.string(),
    displayName: z.string(),
    eyebrow: z.string(),
    location: z.string(),
    role: z.string(),
    tagline: z.string(),
    statement: z.string(),
    email: z.string(),
    socials: z.array(z.object({ label: z.string(), href: z.string() })),
    identities: z.array(
      z.object({
        title: z.string(),
        kicker: z.string(),
        body: z.string()
      })
    )
  })
});

const timeline = defineCollection({
  schema: z.object({
    lang: z.enum(["zh", "en"]),
    title: z.string(),
    period: z.string(),
    category: z.string(),
    location: z.string(),
    summary: z.string(),
    order: z.number()
  })
});

const notes = defineCollection({
  schema: z.object({
    lang: z.enum(["zh", "en"]),
    group: z.string(),
    title: z.string(),
    date: z.string(),
    category: z.string(),
    summary: z.string(),
    featured: z.boolean(),
    tags: z.array(z.string())
  })
});

const life = defineCollection({
  schema: z.object({
    lang: z.enum(["zh", "en"]),
    title: z.string(),
    date: z.string(),
    category: z.string(),
    image: z.string(),
    summary: z.string(),
    order: z.number()
  })
});

const work = defineCollection({
  schema: z.object({
    lang: z.enum(["zh", "en"]),
    group: z.string(),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    logo: z.string(),
    summary: z.string(),
    visibility: z.string(),
    sourceNote: z.string().optional(),
    publicBoundary: z.string().optional(),
    privateStatus: z.string().optional(),
    artifacts: z.array(
      z.object({
        title: z.string(),
        type: z.string(),
        description: z.string(),
        status: z.string(),
        href: z.string().optional()
      })
    )
  })
});

export const collections = { profile, timeline, notes, life, work };
