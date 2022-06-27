import React, { FC } from 'react';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';

type Type = {
  title: string
  accroche: string
}

const CarouselCaption: FC<Type> = ({ title, accroche }) => (
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
        {title}
      </Heading>
      <Text
        fontSize={{ base: 'md', lg: 'lg' }}
        color="white"
        textAlign="center"
        fontWeight="semibold"
        textShadow="#000 1px 0 10px;"
      >
        {accroche}
      </Text>
    </Stack>
  </Container>
);

export default CarouselCaption;
