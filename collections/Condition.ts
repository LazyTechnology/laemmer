import { CollectionConfig } from 'payload/types';

export type Type = {
  title: string
  paragraphes: {
    paragraphe: string
  }[]
  form: {
    checkbox: string
  }
}

export const Condition: CollectionConfig = {
  slug: 'conditions',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Titre',
      required: true,
    },
    {
      type: 'array',
      name: 'paragraphes',
      label: 'Paragraphe',
      fields: [
        {
          type: 'textarea',
          name: 'paragraphe',
          label: 'Paragraphe',
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
          name: 'checkbox',
          label: 'Texte condition',
        },
      ],
    },
  ],
};

export default Condition;
