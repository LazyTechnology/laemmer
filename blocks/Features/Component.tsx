import React, { Fragment } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Type } from '.';
import DynamicIcon from '../../components/DynamicIcon';

const Features: React.FC<Omit<Type, 'blockType'>> = ({ title, description, features, template, image }) => (
  <React.Fragment>
    {template === 'basic' && (
    <Box
      p={6}
      bg="gray.200"
    >
      <Stack
        spacing={4}
        as={Container}
        maxW="4xl"
        textAlign="center"
      >
        <Heading
          fontSize={45}
          color="gray.700"
        >
          {title}
        </Heading>
        <Text
          color="gray.600"
          fontSize="xl"
        >
          {description}
        </Text>
      </Stack>
      <Container
        maxW="6xl"
        mt={12}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
        >
          {features.map((feature, i) => (
            <React.Fragment key={i}>
              <HStack
                align="top"
              >
                <Box
                  color="green.400"
                  px={2}
                >
                  <DynamicIcon
                    icon={feature.icon}
                    size="3em"
                    color="black"
                  />
                </Box>
                <VStack align="start">
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color="gray.600">{feature.description}</Text>
                </VStack>
              </HStack>
            </React.Fragment>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
    )}
    {template === 'screenshot' && (
      <Container
        maxW="5xl"
        py={12}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
        >
          <Stack spacing={4}>
            <Heading>{title}</Heading>
            <Text
              color="gray.500"
              fontSize="lg"
            >
              {description}
            </Text>
            <Stack
              spacing={4}
              divider={(
                <StackDivider
                  borderColor="gray.100"
                />
              )}
            >
              {features.map((el, i) => (
                <Fragment key={i}>
                  <Stack
                    direction="row"
                    align="center"
                  >
                    {el.icon
                      && (
                      <Flex
                        w={8}
                        h={8}
                        align="center"
                        justify="center"
                        rounded="full"
                        bg="blue.400"
                      >
                        <DynamicIcon
                          icon={el.icon}
                          color="white"
                        />
                      </Flex>
                      )}
                    <Text fontWeight={600}>{el.title}</Text>
                  </Stack>
                </Fragment>
              ))}
            </Stack>
          </Stack>
          <Flex>
            <Box
              w="full"
              height="350"
              position="relative"
              rounded="lg"
            >
              <Image
                alt={image.alt}
                src={image.url}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    )}
  </React.Fragment>
);

export default Features;
