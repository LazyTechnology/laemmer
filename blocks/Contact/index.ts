import { Block } from 'payload/types';
import { Type as ConditionType } from '../../collections/Condition';

export type Type = {
  blockType: 'contact'
  title: string
  recaptcha: string
  accroche: {
    title: string
    descriptions: {
      description: string
    }[]
  }
  form: {
    title: string
    description: string
  }
  conditions?: ConditionType
}

const Contact: Block = {
  slug: 'contact',
  labels: {
    singular: 'Contact',
    plural: 'Contacts',
  },
  fields: [
    {
      type: 'text',
      name: 'recaptcha',
      label: 'Clé Recaptcha',
      required: true,
    },
    {
      type: 'group',
      name: 'accroche',
      label: 'Accroche',
      fields: [
        {
          type: 'text',
          name: 'title',
          label: 'Titre',
        },
        {
          type: 'array',
          name: 'descriptions',
          label: 'Descriptions',
          fields: [
            {
              type: 'textarea',
              name: 'description',
              label: 'Description',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'form',
      label: 'Formulaire',
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
      ],
    },
    {
      type: 'relationship',
      relationTo: 'conditions',
      name: 'conditions',
      label: 'Conditions',
    },
  ],
};

export default Contact;
