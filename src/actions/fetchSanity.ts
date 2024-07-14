import { query, sanityClient } from "@/lib/sanity";

export async function getData() {
  try {
    const data = await sanityClient.fetch(query);

    return data;
  } catch (error) {
    return error;
  }
}
