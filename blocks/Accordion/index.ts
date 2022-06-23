import { Block } from 'payload/types';

export type Type = {
  blockType: 'accordion'
  title: string
  description: string
  accordions: {
    title: string
    description: string
  }[]
}

const Accordion: Block = {
  slug: 'accordion',
  labels: {
    singular: 'Accordéon',
    plural: 'Accordéons',
  },
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
      type: 'array',
      name: 'accordions',
      label: 'Accordéons',
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
  ],
};

export default Accordion;
