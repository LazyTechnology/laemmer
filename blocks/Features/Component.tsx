import React, { useEffect } from 'react';
import { Box, Container, Heading, HStack, Icon, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { Type } from '.';
import DynamicIcon from '../../components/DynamicIcon';

const Features: React.FC<Omit<Type, 'blockType'>> = ({ title, description, features }) => (
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
);

export default Features;
