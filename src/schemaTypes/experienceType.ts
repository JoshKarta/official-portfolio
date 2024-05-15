import { defineField, defineType } from "sanity";

export const ExperienceType = defineType({
    name:'experience',
    title: 'Experience',
    type: 'document',
    fields:[
        defineField({
            name:'title',
            type: 'string'
        }),
        defineField({
            name:'link',
            type: 'string',
        }),
        defineField({
            name:'thumbnail',
            type: 'image',
        }),

    ]
})