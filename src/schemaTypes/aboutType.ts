import { defineField, defineType } from "sanity";

export const AboutType = defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      title: "Skills",
      name: "skills",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    }),
  ],
});
