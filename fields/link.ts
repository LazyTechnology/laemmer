import { Field } from 'payload/types';
import { Data } from 'payload/dist/admin/components/forms/Form/types';
import { Type as PageType } from '../collections/Page';

export type Type = {
  type: 'page' | 'custom'
  label: string
  page?: PageType
  url?: string
  position?: string
}

export const link: Field = {
  type: 'group',
  name: 'link',
  label: 'Lien',
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
    {
      type: 'radio',
      name: 'position',
      options: [
        {
          label: 'Centrer',
          value: 'center',
        },
        {
          label: 'A droite',
          value: 'right',
        },
      ],
      defaultValue: 'center',
      admin: {
        layout: 'horizontal',
      },
    },
  ],
};
