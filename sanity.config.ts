import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'CyberHope.ai',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID', // Replace YOUR_PROJECT_ID with actual ID if not using env var
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  basePath: '/studio', // Studio will be accessible at /studio

  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
}) 