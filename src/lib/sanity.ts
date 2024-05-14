import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
    apiVersion: '2023-05-03',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: false
})

const imgBuilder = imageUrlBuilder(sanityClient)

export const sanityImgBuilder = (source:any) => {
 return imgBuilder.image(source)
}

export const query = {
    heroSection: '*[_type == "hero"]',
}