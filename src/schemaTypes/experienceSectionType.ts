import { defineField, defineType } from "sanity";

export const ExperienceSectionType = defineType({
    name:'experienceSection',
    title: 'ExperienceSection',
    type: 'document',
    fields:[
        defineField({
            title: "Title",
            name:'title',
            type: 'string'
        }),
        defineField({
            name:'description',
            type: 'array',
            of: [{type:"block"}]
        }),

    ]
})