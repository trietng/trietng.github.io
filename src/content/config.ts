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

export const collections = {
    'work-experience': workExperienceCollection
};