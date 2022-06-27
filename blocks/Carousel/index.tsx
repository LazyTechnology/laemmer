import { Block } from 'payload/types';
import { Data } from 'payload/dist/admin/components/forms/Form/types';
import { MediaType } from '../../collections/Media';

export type Type = {
  blockType: 'carousel'
  template: string
  carouselTitle: {
    title: string
    accroche: string
  }
  images: {
    image: MediaType
    legend: {
      title: string
      description: string
    }
  }[]
  settings: {
    navigation: boolean
    height: string,
    slidesToShow: number,
    slidesToScroll: number,
    sizeType: string
    sizeGroup: {
      width: number,
      height: number
    }
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
      type: 'radio',
      name: 'template',
      label: 'Template',
      options: [
        {
          label: 'Présentation',
          value: 'presentation',
        },
        {
          label: 'Liste',
          value: 'list',
        },
      ],
      defaultValue: 'presentation',
      admin: {
        layout: 'horizontal',
      },
    },
    {
      type: 'group',
      name: 'carouselTitle',
      label: 'Titre du slide',
      fields: [
        {
          type: 'text',
          name: 'title',
          label: 'Titre',
        },
        {
          type: 'textarea',
          name: 'accroche',
          label: 'Accroche',
        },
      ],
      admin: {
        condition: (_: Data, siblingData: Data): boolean => siblingData?.template === 'list',
      },
    },
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
          type: 'checkbox',
          name: 'navigation',
          label: 'Navigation',
          defaultValue: true,
        },
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
        {
          type: 'radio',
          name: 'sizeType',
          label: 'Taille',
          options: [
            {
              label: '100%',
              value: 'full',
            },
            {
              label: 'Personnalisée',
              value: 'custom',
            },
          ],
          defaultValue: 'full',
        },
        {
          type: 'group',
          name: 'sizeGroup',
          label: 'Taille',
          fields: [
            {
              type: 'number',
              name: 'width',
              label: 'Largeur',
            },
            {
              type: 'number',
              name: 'height',
              label: 'Hauteur',
            },
          ],
          admin: {
            condition: (_: Data, siblingData: Data): boolean => siblingData?.sizeType === 'custom',
          },
        },
      ],
    },
  ],
};

export default Carousel;
