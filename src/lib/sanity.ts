import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
});

const imgBuilder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => {
  return imgBuilder.image(source);
};

const queryHeroSection = `*[_type== "heroSection"] {badge, name, profilePicture}[0]`;
const queryAboutSection = `*[_type== "about"] {title, description, image}[0]`;
const queryExperienceSection = `*[_type== "experienceSection"] {title, description}[0]`;
const queryExperience = `*[_type== "experience"] {title, link, thumbnail}`;
const queryProjects = `*[_type== "project"] {name, introduction, description, url, thumbnail, mockup, mockupType}`;
const queryJourney = `*[_type== "journey"] {title, date, role, description} | order(id asc)`;
const querySkills = `*[_type== "skill"] {skill}`;

export const query = `{
  "hero": ${queryHeroSection},
  "about": ${queryAboutSection},
  "experience": ${queryExperienceSection},
  "experienceProjects": ${queryExperience},
  "projects": ${queryProjects},
  "journey": ${queryJourney},
  "skills": ${querySkills},
}`;
