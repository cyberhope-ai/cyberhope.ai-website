export default {
  name: 'cta',
  title: 'Call to Action',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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