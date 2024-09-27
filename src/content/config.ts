import { defineCollection, z } from "astro:content";

const workExperienceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        company: z.string(),
        location: z.string(),
        startDate: z.date(),
        endDate: z.date().or(z.string()),
    })
});

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        startDate: z.date(),
        endDate: z.date().or(z.string()),
        repository: z.string(),
        demo: z.string(),
        featured: z.boolean(),
    })
});

export const collections = {
    'work-experience': workExperienceCollection,
    'projects': projectCollection,
};