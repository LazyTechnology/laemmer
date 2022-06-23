import { Field } from 'payload/types';

export const background: Field = {
  type: 'text',
  name: 'backgroundColor',
  label: 'Couleur d\'arrière plan',
  defaultValue: 'gray.100',
  required: true,
  admin: {
    description: 'Pour retrouver la liste des couleurs, allez sur ce lien qui indique tous les codes couleurs. Lien : https://chakra-ui.com/docs/styled-system/theming/theme',
  },
};
