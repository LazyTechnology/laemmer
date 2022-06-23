import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';

export type PartenaireType = {
  name: string,
  link: string
  logo: MediaType,
}

const Partenaire: CollectionConfig = {
  slug: 'partenaires',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: (): boolean => true,
  },
  labels: {
    plural: 'Partenaires',
    singular: 'Partenaire',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'text',
          name: 'name',
          label: 'Nom',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          type: 'text',
          name: 'link',
          label: 'Lien',
        },
        {
          type: 'upload',
          relationTo: 'media',
          name: 'logo',
          label: 'Logo',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
};

export default Partenaire;
