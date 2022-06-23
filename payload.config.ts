import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Menu from './globals/Menu';
import Logo from './globals/Logo';
import Footer from './globals/Footer';
import Partenaire from './collections/Partenaire';
import Contact from './collections/Contact';
import Condition from './collections/Condition';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  // cors: '*',
  collections: [
    Page,
    Media,
    Partenaire,
    Contact,
    Condition,
  ],
  globals: [
    Logo,
    Menu,
    Footer,
  ],
});
