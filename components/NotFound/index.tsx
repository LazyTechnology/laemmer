import React from 'react';
import { Box, Button, Heading, Text, Container, Stack } from '@chakra-ui/react';
import NLink from 'next/link';

const NotFound: React.FC = () => (
  <React.Fragment>
    <Container maxW="3xl">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          Cette page est
          <br />
          <Text
            as="span"
            color="blue.400"
          >
            Introuvable
          </Text>
        </Heading>
        <Text color="gray.500">La page que vous recherchez n&apos;existe pas.</Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <NLink href="/">
            <Button
              colorScheme="blue"
              bg="blue.400"
              rounded="full"
              px={6}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Retourner à l&apos;accueil
            </Button>
          </NLink>
        </Stack>
      </Stack>
    </Container>
  </React.Fragment>
);

export default NotFound;
