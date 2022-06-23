import { GlobalConfig } from 'payload/types';
import { link, Type as LinkType } from '../fields';

export type Type = {
  nav: {
    link: LinkType
  }[]
  phone: string
}

const Menu: GlobalConfig = {
  slug: 'menu',
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      type: 'text',
      name: 'phone',
      label: 'Numéro de téléphone',
      required: true,
    },
    {
      type: 'array',
      name: 'nav',
      label: 'Navigation',
      fields: [
        link,
      ],
    },
  ],
};

export default Menu;
