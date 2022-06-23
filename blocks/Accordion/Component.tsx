import React from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, Box, Container, Heading, Text, Stack,
} from '@chakra-ui/react';
import { Type } from '.';

const Accordion: React.FC<Omit<Type, 'blockType'>> = ({ title, description, accordions }) => (
  <Box p={6}>
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
    <ChakraAccordion
      defaultIndex={[0]}
      allowMultiple
      p={10}
    >
      {accordions.map((el, i) => (
        <React.Fragment key={i}>
          <AccordionItem
            p={4}
          >
            <h2>
              <AccordionButton borderRadius={10}>
                <Box
                  flex="1"
                  textAlign="left"
                >
                  {el.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={5}>{el.description}</AccordionPanel>
          </AccordionItem>
        </React.Fragment>
      ))}
    </ChakraAccordion>
  </Box>
);

export default Accordion;
