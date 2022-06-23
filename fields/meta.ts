import { Field } from 'payload/types';

export const meta: Field = {
  name: 'meta',
  label: 'Métadonnées',
  type: 'group',
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
      type: 'text',
      name: 'keywords',
      label: 'Mots clés',
    },
  ],
};
