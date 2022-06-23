import { Block } from 'payload/types';
import { Data } from 'payload/dist/admin/components/forms/Form/types';
import { MediaType } from '../../collections/Media';
import { Type as PageType } from '../../collections/Page';

export type Type = {
  blockType: 'hero'
  template: string
  head: string
  title: string
  image: MediaType
  contents: {
    content: string
    buttons: {
      buttonText: string
      type: 'page' | 'custom'
      page?: PageType
      url?: string
    }[]
  }[]
}

const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heros',
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
      name: 'head',
      label: 'En-tête',
      required: true,
      admin: {
        condition: (_: Data, siblingData: Data): boolean => siblingData?.template === 'screenshot',
      },
    },
    {
      type: 'text',
      name: 'title',
      label: 'Titre',
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
      name: 'contents',
      label: 'Contenus',
      minRows: 1,
      fields: [
        {
          type: 'textarea',
          name: 'content',
          label: 'Contenu',
        },
        {
          type: 'array',
          name: 'buttons',
          label: 'Boutons',
          fields: [
            {
              type: 'text',
              name: 'buttonText',
              label: 'Texte',
              required: true,
            },
            {
              type: 'radio',
              name: 'type',
              required: true,
              options: [
                {
                  label: 'Page',
                  value: 'page',
                },
                {
                  label: 'URL personnalisée',
                  value: 'custom',
                },
              ],
              defaultValue: 'page',
              admin: {
                layout: 'horizontal',
              },
            },
            {
              type: 'relationship',
              relationTo: 'pages',
              name: 'page',
              label: 'Page',
              required: true,
              admin: {
                condition: (_: Data, siblingData: Data): boolean => siblingData?.type === 'page',
              },
            },
            {
              type: 'text',
              name: 'url',
              label: 'URL personnalisée',
              required: true,
              admin: {
                condition: (_: Data, siblingData: Data): boolean => siblingData?.type === 'custom',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default Hero;
