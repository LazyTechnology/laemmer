import { CollectionConfig } from 'payload/types';
import { MediaType } from './Media';
import { meta, slug } from '../fields';
import Carousel, { Type as CarouselType } from '../blocks/Carousel';
import Interlocuteur, { Type as InterlocuteurType } from '../blocks/Interlocuteur';
import Carte, { Type as CarteType } from '../blocks/Carte';
import Hero, { Type as HeroType } from '../blocks/Hero';
import Map, { Type as MapType } from '../blocks/Map';
import Contact, { Type as ContactType } from '../blocks/Contact';
import Features, { Type as FeaturesType } from '../blocks/Features';
import Accordion, { Type as AccordionType } from '../blocks/Accordion';


export type Layout = CarouselType | InterlocuteurType | CarteType | HeroType | MapType | ContactType | FeaturesType | AccordionType

export type Type = {
  title: string
  slug: string
  image?: MediaType
  layout: Layout[]
  meta: {
    title?: string
    description?: string
    keywords?: string
  }
}

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true,
  },
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Titre',
      required: true,
    },
    {
      type: 'blocks',
      name: 'layout',
      label: 'Mise en page',
      minRows: 1,
      blocks: [
        Carousel,
        Interlocuteur,
        Carte,
        Hero,
        Map,
        Contact,
        Features,
        Accordion,
      ],
    },
    meta,
    slug,
  ],
};

export default Page;
