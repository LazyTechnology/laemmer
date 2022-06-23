import { Block } from 'payload/types';
import { MediaType } from '../../collections/Media';

export type Type = {
  blockType: 'carousel'
  images: {
    image: MediaType
    legend: {
      title: string
      description: string
    }
  }[]
  settings: {
    height: string,
    slidesToShow: number,
    slidesToScroll: number,
  }
}

const Carousel: Block = {
  slug: 'carousel',
  labels: {
    singular: 'Carousel',
    plural: 'Carousels',
  },
  fields: [
    {
      type: 'array',
      name: 'images',
      label: 'Images',
      fields: [
        {
          type: 'upload',
          name: 'image',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
        {
          type: 'group',
          name: 'legend',
          label: 'Légende',
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'Titre',
            },
            {
              type: 'text',
              name: 'description',
              label: 'Description',
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      label: 'Paramètres',
      name: 'settings',
      fields: [
        {
          type: 'text',
          name: 'height',
          label: 'Hauteur',
        },
        {
          type: 'number',
          name: 'slidesToShow',
          label: 'Slides à afficher',
        },
        {
          type: 'number',
          name: 'slidesToScroll',
          label: 'Slides à scroller',
        },
      ],
    },
  ],
};

export default Carousel;
