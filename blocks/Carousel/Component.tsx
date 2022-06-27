import React, { Fragment, FC, useState } from 'react';
import { Box, Center, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Type } from '.';

const HeaderText = dynamic(() => import('../../components/layout/Common/HeaderText/HeaderText'));
const CarouselNavigation = dynamic(() => import('./Navigation/Component'));
const CarouselCaption = dynamic(() => import('./Caption/Component'));

const Carousel: FC<Omit<Type, 'blockType'>> = ({ template, images, settings, carouselTitle }) => {
  const [slider, setSlider] = useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const carouselSettings = {
    dots: false,
    arrows: false,
    fade: template === 'presentation',
    infinite: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    slidesToShow: settings.slidesToShow,
    slidesToScroll: settings.slidesToScroll,
    swipeToSlide: true,
    pauseOnHover: true,
  };

  return (
    <Fragment>
      {template !== 'presentation'
          && carouselTitle && (
            <HeaderText
              title={carouselTitle.title}
              accroche={carouselTitle.accroche}
            />
      )}
      <Box
        position="relative"
        {...(template === 'presentation' ? { height: `${settings.height}px` } : {})}
        width="full"
        overflow="hidden"
        pt={4}
      >
        {settings.navigation && (
        <CarouselNavigation
          slider={slider}
          top={top}
          side={side}
        />
        )}
        <Slider
          {...carouselSettings}
          ref={(s) => setSlider(s)}
        >
          {images.map((el, index) => (
            <Box
              key={index}
              position="relative"
            >
              <Center>
                <Image
                  src={el.image.url}
                  alt={el.image.alt}
                  {...(template === 'list' ? { width: settings.sizeType === 'custom' ? settings.sizeGroup.width : '100%', height: settings.sizeType === 'custom' ? settings.sizeGroup.height : '100%' } : { layout: 'fill' })}
                  objectFit={template === 'presentation' ? 'cover' : 'contain'}
                  objectPosition="center"
                  quality={75}
                  priority
                />
              </Center>
              {(el?.legend?.title !== '' || el?.legend?.description !== '')
              && template === 'presentation' ? (
                <CarouselCaption
                  title={el?.legend?.title}
                  accroche={el?.legend?.description}
                />
                ) : (
                  <HeaderText
                    settings={{ spacing: 4, heading: { fontSize: 18 }, text: { fontSize: 13 } }}
                    title={el?.legend?.title}
                    accroche={el?.legend?.description}
                  />
                )}
            </Box>
          ))}
        </Slider>
      </Box>
    </Fragment>
  );
};

export default Carousel;
