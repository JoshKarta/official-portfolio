import { defineField, defineType } from "sanity";

export const HeroSectionType = defineType({
    name:'heroSection',
    title: 'HeroSection',
    type: 'document',
    fields:[
        defineField({
            name: "badge",
            type:'string'
        }),
        defineField({
            name: "name",
            type:'array',
            of:[{type:"string"}]
        }),
    ] 
})