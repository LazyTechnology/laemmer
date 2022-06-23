import React, { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactGA from 'react-ga';
import { Type as PageType } from '../collections/Page';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import RenderBlocks from '../components/RenderBlocks';
import { MediaType } from '../collections/Media';
import { Type as FooterType } from '../globals/Footer';
import { Type as LogoType } from '../globals/Logo';
import Footer from '../components/layout/Footer';

export type Props = {
  page?: PageType
  favicon: MediaType
  statusCode: number
  footer: FooterType
  logo: LogoType
}

ReactGA.initialize('G-DWPYXK08TX');

const Page: React.FC<Props> = (props) => {
  const { page, footer, logo } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <main>
      <Header
        title={page.meta?.title || page.title}
        description={page.meta?.description}
        keywords={page.meta?.keywords}
      />
      <RenderBlocks layout={page.layout} />
      <Footer
        footer={footer}
        logo={logo}
      />
    </main>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug || 'home';

  const pageReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`);
  const pageData = await pageReq.json();

  return {
    props: {
      page: pageData.docs[0],
    },
    notFound: !pageData.docs[0],
    revalidate: 10,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const pageReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?limit=100&depth=0`);
  const pageData = await pageReq.json();

  return {
    paths: pageData.docs.map(({ slug }) => ({
      params: { slug: slug.split('/') },
    })),
    fallback: true,
  };
};
