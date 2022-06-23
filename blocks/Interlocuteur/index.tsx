import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';

export type Type = {
  blockType: 'interlocuteur'
  head: string
  interlocuteur: string
  text: string
  avatar: MediaType
}

const Interlocuteur: Block = {
  slug: 'interlocuteur',
  labels: {
    singular: 'Interlocuteur',
    plural: 'Interlocuteurs',
  },
  fields: [
    {
      type: 'text',
      name: 'head',
      label: 'En tête',
    },
    {
      type: 'text',
      name: 'interlocuteur',
      label: 'Interlocuteur',
    },
    {
      type: 'textarea',
      name: 'text',
      label: 'Texte',
    },
    {
      type: 'upload',
      name: 'avatar',
      relationTo: 'media',
      label: 'Avatar',
    },
  ],
};

export default Interlocuteur;
