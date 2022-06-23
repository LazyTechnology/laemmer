import { Block } from 'payload/types';

export type Type = {
  blockType: 'map'
  api: string
  latitude: number,
  longitude: number,
  markers: {
    latitude: number,
    longitude: number,
  }[]
}

const Map: Block = {
  slug: 'map',
  labels: {
    singular: 'Map',
    plural: 'Maps',
  },
  fields: [
    {
      type: 'text',
      name: 'api',
      label: 'Clé API',
    },
    {
      type: 'number',
      name: 'latitude',
      label: 'Latitude',
    },
    {
      type: 'number',
      name: 'longitude',
      label: 'Longitude',
    },
    {
      type: 'array',
      name: 'markers',
      label: 'Marqueurs',
      fields: [
        {
          type: 'number',
          name: 'latitude',
          label: 'Latitude',
        },
        {
          type: 'number',
          name: 'longitude',
          label: 'Longitude',
        },
      ],
    },
  ],
};

export default Map;
