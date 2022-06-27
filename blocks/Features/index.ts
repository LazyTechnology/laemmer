import { Block } from 'payload/types';
import { Data } from 'payload/dist/admin/components/forms/Form/types';
import { MediaType } from '../../collections/Media';

export type Type = {
  blockType: 'features'
  template: string
  title: string
  description: string
  image: MediaType
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
      type: 'radio',
      name: 'template',
      label: 'Template',
      options: [
        {
          label: 'Basique',
          value: 'basic',
        },
        {
          label: 'Screenshot',
          value: 'screenshot',
        },
      ],
      defaultValue: 'basic',
      admin: {
        layout: 'horizontal',
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
    {
      type: 'upload',
      name: 'image',
      label: 'Image',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_: Data, siblingData: Data): boolean => siblingData?.template === 'screenshot',
      },
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
