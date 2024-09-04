import { defineField, defineType } from "sanity";

export const skillType = defineType({
    name:'skill',
    title: 'Skill',
    type: 'document',
    fields:[
        defineField({
            name:'skill',
            type: 'string'
        })
    ]
})