import React from 'react';
import 'slick-carousel/slick/slick.css';
import { chakra, Box, Flex, SimpleGrid, Stack, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NLink from 'next/link';
import { Type } from '.';

const Carte: React.FC<Omit<Type, 'blockType'>> = ({ backgroundColor, sectionTitleGroup, cards }) => {
  const CardImage = chakra(Image, {
    shouldForwardProp: (prop) => [
      'layout',
      'src',
      'alt',
      'placeholder',
      'blurDataURL',
    ].includes(prop),
  });

  const imageCard = (el) => (
    <Box
      maxW="445px"
      w="full"
      bg="#ffffff"
      boxShadow="xl"
      rounded="md"
      p={6}
      overflow="hidden"
      {...(el?.link?.type !== 'none' ? { cursor: 'pointer' } : {})}
      _hover={{
        shadow: '2xl',
      }}
    >
      {el.template === 'image'
        && (
        <Box
          h="210px"
          bg="gray.100"
          mt={-6}
          mx={-6}
          mb={6}
          pos="relative"
        >
          <CardImage
            layout="fill"
            objectFit="cover"
            src={el.image.image.url}
            alt={el.image.image.alt}
            {...(el?.image?.blurState === 'on' ? { placeholder: 'blur' } : {})}
            {...(el?.image?.blurState === 'on' ? { blurDataURL: el.image.blur } : {})}
            transition="transform 330ms ease-in"
            _hover={{
              transform: 'scale(1.03)',
              transition: 'transform 330ms ease-in-out',
            }}
          />
        </Box>
        )}
      <Stack>
        {el.subtitleGroup.subtitle
          && (
          <Text
            color={el.subtitleGroup.color}
            textTransform="uppercase"
            fontWeight={600}
            fontSize="sm"
            letterSpacing={1.1}
          >
            {el.subtitleGroup.subtitle}
          </Text>
          )}
        {el.titleGroup.title
          && (
          <Heading
            pt={5}
            color={el.titleGroup.color}
            fontSize="2xl"
            fontFamily="body"
          >
            {el.titleGroup.title}
          </Heading>
          )}
        {el.contentGroup.content
          && (
          <Text color={el.contentGroup.color}>
            {el.contentGroup.content}
          </Text>
          )}
      </Stack>
    </Box>
  );
  return (
    <Flex
      textAlign="center"
      pt={7}
      pb={10}
      pl={4}
      pr={4}
      justifyContent="center"
      direction="column"
      width="full"
      backgroundColor={backgroundColor}
    >
      <chakra.h1
        fontSize={45}
        fontWeight="bold"
        color={sectionTitleGroup.color}
      >
        {sectionTitleGroup.title}
      </chakra.h1>
      <SimpleGrid
        columns={{
          xl: 3,
          lg: 3,
          sm: 1,
        }}
        spacing="10"
        mt={8}
        mx="auto"
      >
        {cards.map((el, i) => (
          <React.Fragment key={i}>
            {el?.link?.type !== 'none'
              ? <NLink href={el?.link?.type === 'page' ? el.link.page.slug : el.link.url}>{imageCard(el)}</NLink>
              : imageCard(el)}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Carte;
