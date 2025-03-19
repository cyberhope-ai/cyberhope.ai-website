import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'CyberHope.ai',

  projectId: 'qpk3k6kb',
  dataset: 'production',
  apiVersion: '2023-05-03',
  basePath: '/studio',

  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
}) 