import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Image from 'next/image';
import { Type } from '.';

const Carousel: React.FC<Omit<Type, 'blockType'>> = ({ images, settings }) => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const carouselSettings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    slidesToShow: settings.slidesToShow,
    slidesToScroll: settings.slidesToScroll,
  };

  return (
    <Box
      position="relative"
      height={`${settings.height}px`}
      width="full"
      overflow="hidden"
    >
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => { slider?.slickNext(); }}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      <Slider
        {...carouselSettings}
        ref={(s) => setSlider(s)}
      >
        {images.map((el, index) => (
          <Box
            key={index}
            position="relative"
          >
            <Image
              src={el.image.url}
              alt={el.image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
            <Container
              size="container.lg"
              height="550px"
              position="relative"
            >
              <Stack
                spacing={6}
                position="relative"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  color="white"
                  textAlign="center"
                  textShadow="#000 1px 0 10px;"
                >
                  {el.legend.title}
                </Heading>
                <Text
                  fontSize={{ base: 'md', lg: 'lg' }}
                  color="white"
                  textAlign="center"
                  fontWeight="semibold"
                  textShadow="#000 1px 0 10px;"
                >
                  {el.legend.description}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
