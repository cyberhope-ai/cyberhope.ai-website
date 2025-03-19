// Default Sanity configuration for deployment
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'qpk3k6kb'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

export const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
} 