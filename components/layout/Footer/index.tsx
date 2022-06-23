import React from 'react';
import { Box, Container, Center, SimpleGrid, Stack, Text, Button } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import NLink from 'next/link';
import Image from 'next/image';
import { Props } from './types';

const Footer: React.FC<Props> = ({ footer, logo }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
  };

  return (
    <React.Fragment>
      <Box p={2}>
        <Slider {...settings}>
          {footer.carousel.data.map((el, i) => (
            <React.Fragment
              key={i}
            >
              <Center
                pl={2}
                pr={2}
              >
                <NLink
                  href={el?.link}
                  rel="nofollow"
                >
                  <Button variant="link">
                    <Image
                      src={el.logo.url}
                      alt={el.logo.alt}
                      width="100%"
                      height="50px"
                      objectFit="contain"
                      objectPosition="center"
                      quality={30}
                    />
                  </Button>
                </NLink>
              </Center>
            </React.Fragment>
          ))}
        </Slider>
      </Box>
      <Box
        bg="gray.50"
        color="gray.700"
      >
        <Container
          as={Stack}
          maxW="6xl"
          py={10}
        >
          <SimpleGrid
            templateColumns={{
              sm: '1fr',
              md: '2fr 1fr 1fr 1fr 1fr',
            }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Image
                src={logo.lightLogo.url}
                alt={logo.lightLogo.alt}
                width="100%"
                height="70px"
                objectFit="contain"
                objectPosition="left"
              />
              <Text fontSize="sm">
                ©
                {' '}
                {new Date().getFullYear()}
                {' '}
                Laemmer. Tous droits réservés
              </Text>
            </Stack>
            <Stack align="flex-start">
              <Text
                fontWeight="500"
                fontSize="lg"
                mb={2}
              >
                {footer.name}
              </Text>
              {footer.links.map((el, i) => (
                <React.Fragment key={i}>
                  <NLink href={el.type === 'page' ? `/${el.page.slug}` : el.url}>{el.label}</NLink>
                </React.Fragment>
              ))}
            </Stack>
            {footer.section.map((sec, secI) => (
              <React.Fragment key={secI}>
                <Stack align="flex-start">
                  <Text
                    fontWeight="500"
                    fontSize="lg"
                    mb={2}
                  >
                    {sec.name}
                  </Text>
                  {sec.elements.map((el, eli) => (
                    <React.Fragment key={eli}>
                      {el.type !== 'link' ? <Text>{el.element}</Text>
                        : <NLink href={el.linkType === 'custom' ? el.url : el.page.slug}>{el.element}</NLink>}
                    </React.Fragment>
                  ))}
                </Stack>
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
