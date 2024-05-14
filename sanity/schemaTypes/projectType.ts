import { defineField, defineType } from "sanity";

export const ProjectType = defineType({
    name:'project',
    title: 'Project',
    type: 'document',
    fields:[
        defineField({
            name:'thumbnail',
            type: 'image'
        }),
        defineField({
            name:'name',
            type: 'string',
        }),
        defineField({
            name:'url',
            type: 'string',
        }),
        defineField({
            name:'introduction',
            type: 'array',
            of:[{type:"block"}]
        }),
        defineField({
            name:'description',
            type: 'array',
            of:[{type:"block"}]
        }),
    ]
})