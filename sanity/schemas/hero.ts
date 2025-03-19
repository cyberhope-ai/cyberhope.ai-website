export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    }
  ]
} 