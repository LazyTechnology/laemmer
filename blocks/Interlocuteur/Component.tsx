import React from 'react';
import 'slick-carousel/slick/slick.css';
import { chakra, Box, Flex, useColorModeValue, SimpleGrid, Avatar } from '@chakra-ui/react';
import NextImage from 'next/image';
import { Type } from '.';

const Interlocuteur: React.FC<Omit<Type, 'blockType'>> = ({ interlocuteur, head, text, avatar }) => (
  <Flex
    textAlign="center"
    pt={10}
    pb={10}
    pl={4}
    pr={4}
    justifyContent="center"
    direction="column"
    width="full"
    backgroundColor={useColorModeValue('gray.200', 'gray200')}
  >
    <Box
      width={{ base: 'full' }}
      margin="auto"
    >
      <chakra.h3
        fontSize={20}
        fontWeight="bold"
        textTransform="uppercase"
        color="blue.500"
      >
        {head}
      </chakra.h3>
      <chakra.h1
        py={1}
        fontSize={48}
        fontWeight="bold"
        color={useColorModeValue('gray.700', 'gray.50')}
      >
        {interlocuteur}
      </chakra.h1>
    </Box>
    <SimpleGrid
      columns={{ base: 1 }}
      spacing="20"
      mt={8}
      mx="auto"
    >
      <Flex
        boxShadow="lg"
        maxW="640px"
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        width="full"
        rounded="xl"
        p={10}
        justifyContent="space-between"
        position="relative"
        bg={useColorModeValue('white', 'gray.800')}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
          backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwMCA1MDAiIGhlaWdodD0iNTAwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MDAgNTAwIiB3aWR0aD0iNTAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2Ljk5Miw0MTYuNTY5YzAsMjAuMDc4LDE2LjI2MiwzNi4zNDQsMzYuMzQsMzYuMzQ0aDExOC4xMTEgIGMyMC4wNzksMCwzNi4zNDMtMTYuMjY2LDM2LjM0My0zNi4zNDRWMjcxLjIwMmMwLTIwLjA3OS0xNi4yNjQtMzYuMzQyLTM2LjM0My0zNi4zNDJoLTU4LjMyOGMtMTAuMDg5LDAtMTguMTctOC4xNzctMTguMTctMTguMTcgIGMwLTMuMjcxLDAuODE1LTUuNTQyLDAuODE1LTUuNTQyYzEzLjI2NC00My45NzcsNDYuNzg1LTc5LjIyNyw4OS43NjItOTQuODUybDAuMTgtMC4xODJjMTIuOTk3LTUuNTQsMjIuMDgzLTE4LjQ0NSwyMi4wODMtMzMuNDM3ICBjMC0yMC4wNzctMTYuMjY0LTM2LjM0MS0zNi4zNDMtMzYuMzQxYy00LjkwNiwwLTkuNTM2LDAuOTk4LTEzLjgwNCwyLjcyM2wtMS42NDQsMC42NEM5NC42OCw4MS40MDUsMzYuOTkyLDE2MC40NSwzNi45OTIsMjUzLjAzICBWNDE2LjU2OXogTTI3My4yMTUsNDE2LjU2OWMwLDIwLjA3OCwxNi4yNjIsMzYuMzQ0LDM2LjM0MSwzNi4zNDRoMTE4LjExMmMyMC4wNzgsMCwzNi4zNC0xNi4yNjYsMzYuMzQtMzYuMzQ0VjI3MS4yMDIgIGMwLTIwLjA3OS0xNi4yNjItMzYuMzQyLTM2LjM0LTM2LjM0MmgtNTguMzNjLTEwLjA4OCwwLTE4LjE2OS04LjE3Ny0xOC4xNjktMTguMTdjMC0zLjM2MiwwLjgxMy01LjU0MiwwLjgxMy01LjU0MiAgYzEzLjI2Ny00My45NzcsNDYuNzg3LTc5LjIyNyw4OS43NjUtOTQuODUybDAuMTgtMC4xODJjMTIuOTk1LTUuNTQsMjIuMDgxLTE4LjQ0NSwyMi4wODEtMzMuNDM3ICBjMC0yMC4wNzctMTYuMjYyLTM2LjM0MS0zNi4zNC0zNi4zNDFjLTQuOTA2LDAtOS41MzgsMC45OTgtMTMuODA1LDIuNzIzbC0xLjY0NCwwLjY0QzMzMC45MDMsODEuNDA1LDI3My4yMTUsMTYwLjQ1LDI3My4yMTUsMjUzLjAzICBWNDE2LjU2OXoiIGZpbGw9IiMwMTAxMDEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==")',
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
        }}
      >
        <Flex
          direction="column"
          textAlign="left"
          justifyContent="space-between"
        >
          <chakra.p
            fontWeight="medium"
            fontSize="15px"
            pb={4}
          >
            {text}
          </chakra.p>
          <chakra.p
            fontWeight="bold"
            fontSize={14}
          >
            {interlocuteur}
          </chakra.p>
        </Flex>
        <Avatar
          height={20}
          width={20}
          alignSelf="center"
          m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        >
          <NextImage
            src={avatar.url}
            alt={avatar.alt}
            objectFit="cover"
            layout="fill"
            style={{ borderRadius: 'var(--chakra-radii-full)' }}
            quality={100}
            loading="lazy"
          />
        </Avatar>
      </Flex>
    </SimpleGrid>
  </Flex>
);

export default Interlocuteur;
