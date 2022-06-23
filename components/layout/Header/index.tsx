import React from 'react';
import {
  Button,
  chakra,
  CloseButton,
  Flex, HStack, IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
  Text,
} from '@chakra-ui/react';
import NLink from 'next/link';
import { AiOutlinePhone, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Props } from './types';

const Header: React.FC<Props> = ({ menu }) => {
  const router = useRouter();

  const bg = useColorModeValue('white', 'gray.800');
  const ref = React.useRef();
  const cl = useColorModeValue('gray.800', 'white');
  const mobileNav = useDisclosure();

  const logo = useColorModeValue(menu?.logo?.lightLogo?.url, menu?.logo?.darkLogo?.url);

  const MobileNavContent = (
    <VStack
      pos="fixed"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
      zIndex={4}
    >
      <CloseButton
        aria-label="Fermer le menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      {menu?.menu?.phone && (
        <Text fontWeight="bold">
          <NLink href={`tel:${menu?.menu?.phone}`}>
            <Button
              colorScheme="telegram"
              variant="outline"
              size="xs"
            >
              {menu?.menu?.phone}
            </Button>
          </NLink>
        </Text>
      )}
      {menu?.menu?.nav?.map(({ link }, i) => (
        <React.Fragment key={i}>
          <NLink
            href={link.type === 'page' ? link.page.slug : link.url}
          >
            <Button
              w="full"
              variant="ghost"
            >
              {link.label}
            </Button>
          </NLink>
        </React.Fragment>
      ))}
    </VStack>
  );
  return (
    <React.Fragment>
      <chakra.header
        pos="sticky"
        top={0}
        ref={ref}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="telegram.600"
        w="full"
        overflowY="hidden"
        borderBottomWidth={1}
        borderBottomColor={useColorModeValue('gray.100', 'gray.900')}
        zIndex={3}
      >
        <chakra.div
          h="5.5rem"
          mx="auto"
        >
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex
              align="flex-start"
            >
              <NLink
                href="/"
                passHref
              >
                <Button variant="link">
                  <Image
                    src={logo}
                    width={155}
                    height={155}
                    alt={menu?.logo?.lightLogo?.alt}
                    loading="lazy"
                  />
                </Button>
              </NLink>
            </Flex>
            <Flex>
              <HStack
                spacing="2"
                display={{ base: 'none', lg: 'inline-block' }}
                paddingTop={{ base: 'none' }}
                textAlign="center"
              >
                {menu?.menu?.nav?.map(({ link }, i) => (
                  <React.Fragment key={i}>
                    {link.position === 'center' && (
                      <NLink
                        href={link.type === 'page' ? link.page.slug : link.url}
                      >
                        <Button
                          bg={bg}
                          size="lg"
                          {...(link.type === 'page'
                            && (router.asPath === `/${link?.page?.slug}` ? { color: 'blue.500' } : { color: 'gray.700' })
                          )}
                          {...(link.type !== 'page'
                            && (router.asPath === link?.url ? { color: 'blue.500' } : { color: 'gray.700' })
                          )}
                          display="inline-flex"
                          alignItems="center"
                          fontSize="sm"
                          _hover={{ color: cl }}
                          _focus={{ boxShadow: 'none' }}
                        >
                          <Text>{link.label}</Text>
                        </Button>
                      </NLink>
                    )}
                  </React.Fragment>
                ))}
              </HStack>
            </Flex>
            <Flex
              justify="flex-end"
              align="center"
              color="gray.400"
            >
              <HStack
                spacing="5"
                display={{ base: 'none', sm: 'flex' }}
              >
                {menu?.menu?.phone
                  && (
                  <Text fontWeight="bold">
                    <NLink href={`tel:${menu?.menu?.phone}`}>
                      <Button
                        colorScheme="telegram"
                        variant="outline"
                        size="xs"
                        leftIcon={<AiOutlinePhone />}
                      >
                        {menu?.menu?.phone}
                      </Button>
                    </NLink>
                  </Text>
                  )}
                {menu?.menu?.nav?.map(({ link }, i) => (
                  <React.Fragment key={i}>
                    {link.position === 'right' && (
                      <NLink
                        href={link.type === 'page' ? link.page.slug : link.url}
                      >
                        <Button
                          colorScheme="telegram"
                          variant="solid"
                          size="sm"
                          shadow="lg"
                        >
                          {link.label}
                        </Button>
                      </NLink>
                    )}
                  </React.Fragment>
                ))}
              </HStack>
              <IconButton
                display={{ base: 'flex', lg: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
};

export default Header;
