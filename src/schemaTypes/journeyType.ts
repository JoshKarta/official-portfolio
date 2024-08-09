import { defineField, defineType } from "sanity";

export const JourneyType = defineType({
  name: "journey",
  title: "Journey",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "date",
      type: "string",
    }),
    defineField({
      title: "Extra text",
      name: "extra_text",
      type: "string",
    }),
  ],
});
