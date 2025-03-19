export default {
  name: 'avatar',
  title: 'AI Avatar',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'vimeoId',
      title: 'Vimeo ID',
      description: 'The ID of the Vimeo video (from the URL, e.g., 1059530948)',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'accentColor',
      title: 'Accent Color',
      description: 'Hex color code (e.g., #00ffff)',
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