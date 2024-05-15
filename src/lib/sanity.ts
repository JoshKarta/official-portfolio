import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: false
})

const imgBuilder = imageUrlBuilder(sanityClient)

export const sanityImgBuilder = (source:any) => {
 return imgBuilder.image(source)
}
