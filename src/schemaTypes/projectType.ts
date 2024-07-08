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
            name:'mockup',
            type: 'image'
        }),
        defineField({
            name: 'mockupType',
            type: 'string',
            options: {
                list: [
                  {title: 'Laptop', value: 'laptop'},
                  {title: 'Mobile', value: 'mobile'}
                ], // <-- predefined values
                layout: 'radio' // <-- defaults to 'dropdown'
              }        }),
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