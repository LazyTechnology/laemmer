import { GlobalConfig } from 'payload/types';
import { Data } from 'payload/dist/admin/components/forms/Form/types';
import { Type as PageType } from '../collections/Page';
import { PartenaireType } from '../collections/Partenaire';

export type Type = {
  name: string
  links: {
    type: 'page' | 'custom'
    label: string
    page?: PageType
    url?: string
  }[]
  section: {
    name: string,
    elements: {
      type: string
      element: string
      linkType: 'page' | 'custom'
      page?: PageType
      url?: string
    }[]
  }[]
  carousel: {
    data: PartenaireType[]
  }
}

const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'Nom de la section (liens)',
    },
    {
      type: 'array',
      name: 'links',
      label: 'Liens',
      fields: [
        {
          type: 'radio',
          name: 'type',
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
          type: 'row',
          fields: [
            {
              type: 'text',
              name: 'label',
              label: 'Étiquette',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              type: 'relationship',
              relationTo: 'pages',
              name: 'page',
              label: 'Page',
              required: true,
              admin: {
                width: '50%',
                condition: (_: Data, siblingData: Data): boolean => siblingData?.type === 'page',
              },
            },
            {
              type: 'text',
              name: 'url',
              label: 'URL personnalisée',
              required: true,
              admin: {
                width: '50%',
                condition: (_: Data, siblingData: Data): boolean => siblingData?.type === 'custom',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'array',
      name: 'section',
      label: 'Section',
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Nom de la section',
        },
        {
          type: 'array',
          name: 'elements',
          label: 'Elements',
          fields: [
            {
              type: 'select',
              name: 'type',
              label: 'Type',
              options: [
                {
                  label: 'Texte',
                  value: 'text',
                },
                {
                  label: 'Liens',
                  value: 'link',
                },
              ],
            },
            {
              type: 'textarea',
              name: 'element',
              label: 'Element',
              required: true,
            },
            {
              type: 'radio',
              name: 'linkType',
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
                condition: (_: Data, siblingData: Data): boolean => siblingData?.type === 'link',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'relationship',
                  relationTo: 'pages',
                  name: 'page',
                  label: 'Page',
                  admin: {
                    width: '50%',
                    condition: (_: Data, siblingData: Data): boolean => siblingData?.linkType === 'page' && siblingData?.type === 'link',
                  },
                },
                {
                  type: 'text',
                  name: 'url',
                  label: 'URL personnalisée',
                  admin: {
                    width: '50%',
                    condition: (_: Data, siblingData: Data): boolean => siblingData?.linkType === 'custom' && siblingData?.type === 'link',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'carousel',
      label: 'Carousel',
      fields: [
        {
          type: 'relationship',
          relationTo: 'partenaires',
          name: 'data',
          label: 'Relation',
          hasMany: true,
        },
      ],
    },
  ],
};

export default Footer;
