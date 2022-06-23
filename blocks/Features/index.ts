import { Block } from 'payload/types';

export type Type = {
  blockType: 'features'
  title: string
  description: string
  features: {
    icon: string
    title: string
    description: string
  }[]
}

const Features: Block = {
  slug: 'features',
  labels: {
    singular: 'Caractéristique',
    plural: 'Caractéristiques',
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Titre',
    },
    {
      type: 'textarea',
      name: 'description',
      label: 'Description',
    },
    {
      type: 'array',
      name: 'features',
      label: 'Caractéristiques',
      fields: [
        {
          type: 'text',
          name: 'icon',
          label: 'icon',
          admin: {
            description: 'La liste des icônes se trouve à l\'adresse : https://react-icons.github.io/react-icons/',
          },
        },
        {
          type: 'text',
          name: 'title',
          label: 'Titre',
        },
        {
          type: 'textarea',
          name: 'description',
          label: 'Description',
        },
      ],
    },
  ],
};

export default Features;
