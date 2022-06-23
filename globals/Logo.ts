import { GlobalConfig } from 'payload/types';
import { MediaType } from '../collections/Media';

export type Type = {
  lightLogo: MediaType
  darkLogo: MediaType
  favicon: MediaType
}

const Logo: GlobalConfig = {
  slug: 'logo',
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      type: 'upload',
      name: 'lightLogo',
      label: 'Logo (thème clair)',
      relationTo: 'media',
    },
    {
      type: 'upload',
      name: 'darkLogo',
      label: 'Logo (thème sombre)',
      relationTo: 'media',
    },
    {
      type: 'upload',
      name: 'favicon',
      label: 'Favicon',
      relationTo: 'media',
    },
  ],
};

export default Logo;
