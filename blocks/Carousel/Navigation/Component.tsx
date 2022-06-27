import React, { Fragment, FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

type Type = {
  slider: any
  side: any
  top: any
}

const CarouselNavigation: FC<Type> = ({ slider, top, side }) => (
  <Fragment>
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
  </Fragment>
);

export default CarouselNavigation;
