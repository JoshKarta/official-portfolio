import { defineField, defineType } from "sanity";

export const JourneyType = defineType({
  name: "journey",
  title: "Journey",
  type: "document",
  fields: [
    defineField({
      name: "id",
      type: "number",
      validation: (Rule) => Rule.integer(),
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "role",
      type: "string",
    }),
    defineField({
      name: "date",
      type: "string",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "string",
    }),
  ],
});
