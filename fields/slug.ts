import { Field } from 'payload/types';
import formatSlug from '../utilities/formatSlug';

export const slug: Field = {
  type: 'text',
  name: 'slug',
  label: 'Slug',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [
      formatSlug('title'),
    ],
  },
};
