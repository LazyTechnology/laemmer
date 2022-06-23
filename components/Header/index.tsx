import React from 'react';
import NextHead from 'next/head';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

const defaultDescription = 'Basé à Châteauroux, Patrick Laemmer votre fournisseur de matériel en Informatique de gestion, encaissement et pesage, bureautique dans l\'indre.';
const defaultTitle = 'Laemmer';
const titlePrefix = 'Laemmer -';
const defaultKeywords = 'laemmer,laemmer chateauroux,laemmer informatique,laemmer fourniture de bureau,nouvel horizon,patrick laemmer,9 rue robert mallet stevens,nh 36,36000,chateauroux,indre,region centre,berry,informatique de gestion,encaissement et pesage,serveur bureautique,papeterie,informatique,mobilier,bureau,mobilier bureau,logiciel professionnel,logiciel gestion,fauteuil bureau,imprimante,copieur,ordinateur,portable,serveur,reseau,consommable,bureautique,clavier,souris,usb,imprimante multifonction,ecran lcd,projecteur,canon,sharp,fujitsu,sage,micromegas,ebp,triump adler,nec';

type Props = {
  title?: string,
  description?: string,
  keywords?: string,
};

const Header: React.FC<Props> = ({ title, description, keywords }) => {
  const { asPath } = useRouter();

  const getTitle = () => {
    if (title) return `${titlePrefix} ${title}`;
    return `${titlePrefix} ${defaultTitle}`;
  };

  return (
    <NextHead>
      <title>
        {getTitle()}
      </title>
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.svg"
      />
      <meta
        name="description"
        content={description || defaultDescription}
      />
      <meta
        name="keywords"
        content={keywords || defaultKeywords}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        property="og:url"
        content={`${SERVER_URL}${asPath}`}
      />
      <meta
        property="og:title"
        content={title || defaultTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="twitter:title"
        content={title || defaultTitle}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: '#nprogress .bar { background: white !important; }',
        }}
      />
    </NextHead>
  );
};

export default Header;
