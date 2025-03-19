import { sanityClient } from './sanity'

export async function getHero() {
  return sanityClient.fetch(`*[_type == "hero"][0]`)
}

export async function getFeatures() {
  return sanityClient.fetch(`*[_type == "feature"] | order(order asc)`)
}

export async function getTextSections() {
  return sanityClient.fetch(`*[_type == "textSection"] | order(order asc)`)
}

export async function getAvatars() {
  return sanityClient.fetch(`*[_type == "avatar"] | order(order asc)`)
}

export async function getCta() {
  return sanityClient.fetch(`*[_type == "cta"][0]`)
} 