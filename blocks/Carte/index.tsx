import { Block } from 'payload/types';
import { Data } from 'payload/dist/admin/components/forms/Form/types';
import { MediaType } from '../../collections/Media';
import { Type as PageType } from '../../collections/Page';
import { background, color } from '../../fields';

export type Type = {
  blockType: 'carte'
  backgroundColor: string
  sectionTitleGroup: {
    title: string,
    color: string
  }
  cards: {
    template: 'basic' | 'image'
    image: {
      image: MediaType
      blurState: string
      blur: string
    }
    subtitleGroup: {
      subtitle: string
      color: string
    }
    titleGroup: {
      title: string
      color: string
    }
    contentGroup: {
      content: string
      color: string
    }
    link: {
      type: 'none' | 'page' | 'custom'
      page?: PageType
      url?: string
    }
  }[]
}

const Carte: Block = {
  slug: 'carte',
  labels: {
    singular: 'Carte',
    plural: 'Cartes',
  },
  fields: [
    background,
    {
      type: 'group',
      name: 'sectionTitleGroup',
      label: 'Titre de la section',
      fields: [
        {
          type: 'text',
          name: 'title',
          label: 'Titre de la section',
        },
        color,
      ],
    },
    {
      type: 'array',
      name: 'cards',
      label: 'Cartes',
      minRows: 1,
      fields: [
        {
          type: 'radio',
          name: 'template',
          label: 'Template',
          required: true,
          options: [
            {
              label: 'Basique',
              value: 'basic',
            },
            {
              label: 'Image',
              value: 'image',
            },
          ],
          defaultValue: 'image',
          admin: {
            layout: 'horizontal',
          },
        },
        {
          type: 'group',
          name: 'image',
          label: 'Image',
          fields: [
            {
              type: 'upload',
              name: 'image',
              relationTo: 'media',
              label: 'Image',
              required: true,
            },
            {
              type: 'radio',
              name: 'blurState',
              label: 'Activé le flou',
              options: [
                {
                  label: 'Désactivé',
                  value: 'off',
                },
                {
                  label: 'Activé',
                  value: 'on',
                },
              ],
              defaultValue: 'none',
              admin: {
                layout: 'horizontal',
              },
            },
            {
              type: 'text',
              name: 'blur',
              label: 'Flou de chargement (base64)',
              required: true,
              admin: {
                condition: (_: Data, siblingData: Data): boolean => siblingData?.blurState === 'on',
              },
            },
          ],
          admin: {
            condition: (_: Data, siblingData: Data): boolean => siblingData?.template === 'image',
          },
        },
        {
          type: 'group',
          name: 'subtitleGroup',
          label: 'Sous-titre',
          fields: [
            {
              type: 'text',
              name: 'subtitle',
              label: 'Sous-titre',
            },
            color,
          ],
        },
        {
          type: 'group',
          name: 'titleGroup',
          label: 'Titre',
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'Titre',
            },
            color,
          ],
        },
        {
          type: 'group',
          name: 'contentGroup',
          label: 'Contenu',
          fields: [
            {
              type: 'textarea',
              name: 'content',
              label: 'Contenu',
            },
            color,
          ],
        },
        {
          type: 'group',
          name: 'link',
          label: 'Lien',
          required: true,
          fields: [
            {
              type: 'radio',
              name: 'type',
              options: [
                {
                  label: 'Aucune',
                  value: 'none',
                },
                {
                  label: 'Page',
                  value: 'page',
                },
                {
                  label: 'URL personnalisée',
                  value: 'custom',
                },
              ],
              defaultValue: 'none',
              admin: {
                layout: 'horizontal',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  type: 'relationship',
                  relationTo: 'pages',
                  name: 'page',
                  label: 'Page',
                  required: true,
                  admin: {
                    width: '50%',
                    condition: (_: Data, siblingData: Data): boolean => siblingData?.type === 'page',
                  },
                },
                {
                  type: 'text',
                  name: 'url',
                  label: 'URL personnalisée',
                  required: true,
                  admin: {
                    width: '50%',
                    condition: (_: Data, siblingData: Data): boolean => siblingData?.type === 'custom',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Carte;
