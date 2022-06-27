import React from 'react';
import { Box, Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NLink from 'next/link';
import { Type } from '.';

const Hero: React.FC<Omit<Type, 'blockType'>> = ({ template, title, contents, head, image }) => (
  <React.Fragment>
    {template === 'basic' && (
      <Container
        maxW="3xl"
      >
        <Stack
          as={Box}
          textAlign="center"
          spacing={{
            base: 8,
            md: 12,
          }}
          py={{ base: 20 }}
        >
          <Heading
            fontWeight={700}
            fontSize={{
              base: '2xl',
              sm: '4xl',
              md: '6xl',
            }}
            lineHeight="110%"
          >
            <Text
              as="span"
              color="blue.600"
              bgClip="text"
              bgGradient="linear(to-r, blue.600,purple.600)"
            >
              {title}
            </Text>
          </Heading>
          {contents.map((el, i) => (
            <React.Fragment key={i}>
              <Text color="gray.600">
                {el.content}
              </Text>
              {el?.buttons?.length !== 0
                && (
                  <Stack
                    direction={{
                      base: 'column',
                      md: 'row',
                    }}
                    align="center"
                    alignSelf="center"
                    spacing={4}
                  >
                    {el.buttons.map((b, bi) => (
                      <NLink
                        href={b?.type === 'page' ? b.page.slug : b.url}
                        key={bi}
                      >
                        <Button
                          rounded="full"
                          bg="blue.400"
                          color="white"
                          _hover={{
                            bg: 'blue.500',
                          }}
                        >
                          {b.buttonText}
                        </Button>
                      </NLink>
                    ))}
                  </Stack>
                )}
            </React.Fragment>
          ))}
        </Stack>
      </Container>
    )}
    {template === 'screenshot' && (
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        backgroundColor="gray.100"
        borderTopWidth={1}
        borderBottomWidth={1}
      >
        <Flex
          p={8}
          flex={1}
          align="center"
          justify="center"
        >
          <Stack
            spacing={6}
            w="full"
            maxW="lg"
          >
            <Heading fontSize={{
              base: '3xl',
              md: '4xl',
              lg: '5xl',
            }}
            >
              <Text
                as="span"
                position="relative"
              >
                {head}
              </Text>
              <br />
              <Text
                color="blue.400"
                as="span"
              >
                {title}
              </Text>
            </Heading>
            {contents.map((el, i) => (
              <React.Fragment key={i}>
                <Text
                  fontSize={{
                    base: 'md',
                    lg: 'lg',
                  }}
                  color="gray.600"
                >
                  {el.content}
                </Text>
                {el?.buttons?.length !== 0
                  && (
                  <Stack
                    direction={{
                      base: 'column',
                      md: 'row',
                    }}
                    spacing={4}
                  >
                    {el.buttons.map((b, bi) => (
                      <NLink
                        href={b?.type === 'page' ? b.page.slug : b.url}
                        key={bi}
                      >
                        <Button
                          rounded="full"
                          bg="blue.400"
                          color="white"
                          _hover={{
                            bg: 'blue.500',
                          }}
                        >
                          {b.buttonText}
                        </Button>
                      </NLink>
                    ))}
                  </Stack>
                  )}
              </React.Fragment>
            ))}
          </Stack>
        </Flex>
        <Flex
          flex={1}
          pos="relative"
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={image.url}
            alt={image.alt}
          />
        </Flex>
      </Stack>
    )}
    {template === 'background' && (
      <Box
        position="relative"
        w="full"
        h="350px"
      >
        <Image
          src={image.url}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
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
          {contents.map((el, i) => (
            <React.Fragment key={i}>
              <Text
                fontSize={{ base: 'lg', lg: 'xl' }}
                color="white"
                textAlign="center"
                fontWeight="semibold"
                textShadow="#000 2px 0 10px;"
              >
                {el.content}
              </Text>
            </React.Fragment>
          ))}
        </Stack>
      </Box>
    )}
  </React.Fragment>
);

export default Hero;
