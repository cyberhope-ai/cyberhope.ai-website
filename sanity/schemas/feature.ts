export default {
  name: 'feature',
  title: 'Feature',
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
      name: 'icon',
      title: 'Icon Name',
      description: 'Icon name from Lucide (e.g., Database, Cloud, Shield)',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: any) => Rule.required()
    }
  ]
} 