import { Field } from 'payload/types';

export const color: Field = {
  type: 'text',
  name: 'color',
  label: 'Couleur',
  defaultValue: 'gray.600',
  required: true,
  admin: {
    description: 'Pour retrouver la liste des couleurs, allez sur ce lien qui indique tous les codes couleurs. Lien : https://chakra-ui.com/docs/styled-system/theming/theme',
  },
};
