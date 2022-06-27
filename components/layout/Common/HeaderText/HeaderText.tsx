import React, { FC } from 'react';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';
import { Props } from './types';

const HeaderText: FC<Props> = ({ title, accroche, settings }) => (
  <Stack
    spacing={settings?.spacing ? settings?.spacing : 4}
    as={Container}
    maxW={settings?.maxW ? settings?.maxW : 'xl'}
    textAlign="center"
    pt={6}
  >
    <Heading
      fontSize={settings?.heading?.fontSize ? settings?.heading?.fontSize : '45'}
      color={settings?.heading?.color ? settings?.heading?.color : 'gray.800'}
    >
      {title}
    </Heading>
    <Text
      fontSize={settings?.text?.fontSize ? settings?.text?.fontSize : 'xl'}
      color={settings?.text?.color ? settings?.text?.color : 'gray.600'}
    >
      {accroche}
    </Text>
  </Stack>
);

export default HeaderText;
