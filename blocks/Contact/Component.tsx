import {
  chakra,
  Box,
  Heading,
  VStack,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Center,
  Spinner,
  Alert,
  AlertIcon,
  Icon,
  Text,
  useBreakpointValue,
  IconProps,
  Container,
  SimpleGrid,
  Stack,
  Checkbox,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineTag } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { Type } from '.';

const Contact: React.FC<Omit<Type, 'blockType'>> = ({ recaptcha, accroche, form, conditions }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [condition, setCondition] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const recaptchaRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post('/api/contact', {
      recaptcha: recaptchaRef.current.getValue(),
      name,
      email,
      subject,
      message,
      condition,
    })
      .then(() => { setSuccess(true); setError(false); })
      .catch(() => { setError(true); setSuccess(false); })
      .finally(() => { recaptchaRef.current.reset(); setLoading(false); });
  };

  const conditionCheck = () => {
    setCondition(!condition);
  };

  return (
    <React.Fragment>
      <Box position="relative">
        <Container
          as={SimpleGrid}
          maxW="7xl"
          columns={{ base: 1, md: 2 }}
          spacing={20}
          py={20}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            >
              {accroche.title}
            </Heading>
            {accroche.descriptions.map((el, i) => (
              <React.Fragment key={i}>
                <Text
                  fontFamily="heading"
                  fontSize={{ base: '1xl', md: '2xl' }}
                  display={{ base: 'none', md: 'block' }}
                >
                  {el.description}
                </Text>
              </React.Fragment>
            ))}
          </Stack>
          <Stack
            bg="gray.50"
            rounded="xl"
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}
            borderWidth={1}
          >
            <Stack spacing={4}>
              <Heading
                color="gray.800"
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              >
                {form.title}
              </Heading>
              <Text
                color="gray.500"
                fontSize={{ base: 'sm', sm: 'md' }}
              >
                {form.description}
              </Text>
            </Stack>
            <Box
              mt={10}
            >
              <Stack spacing={4}>
                {(error || success)
                && (
                  <Alert
                    {...(error ? { status: 'error' } : {})}
                    {...(success ? { status: 'success' } : {})}
                    borderRadius={15}
                  >
                    <AlertIcon />
                    {error && 'Une erreur est survenue'}
                    {success && 'Votre demande à bien été prise en compte'}
                  </Alert>
                )}
                <chakra.form
                  onSubmit={handleSubmit}
                  p={4}
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Nom</FormLabel>
                      <InputGroup>
                        <InputLeftElement><BsPerson /></InputLeftElement>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Votre nom"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <InputLeftElement><MdOutlineEmail /></InputLeftElement>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Votre adresse email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Sujet</FormLabel>
                      <InputGroup>
                        <InputLeftElement><AiOutlineTag /></InputLeftElement>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Votre nom"
                          onChange={(e) => setSubject(e.target.value)}
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        placeholder="Votre message"
                        rows={6}
                        resize="none"
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </FormControl>
                    {conditions
                      && (
                      <Checkbox
                        required
                        checked={condition}
                        onChange={conditionCheck}
                      >
                        {conditions.form.checkbox}
                        &nbsp;
                        <Button
                          variant="link"
                          onClick={onOpen}
                        >
                          En savoir plus...
                        </Button>
                      </Checkbox>
                      )}
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptcha}
                    />
                    <Button
                      fontFamily="heading"
                      mt={8}
                      w="full"
                      bgGradient="linear(to-r, blue.400,purple.400)"
                      color="white"
                      _hover={{
                        bgGradient: 'linear(to-r, blue.500,purple.500)',
                        boxShadow: 'xl',
                      }}
                      _focus={{
                        bgGradient: 'linear(to-r, purple.500,blue.500)',
                        boxShadow: 'xl',
                      }}
                      type="submit"
                      disabled={loading}
                    >
                      Envoyer ma demande
                    </Button>
                  </VStack>
                </chakra.form>
                {loading && (
                <Center>
                  <Spinner
                    mt={5}
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="lg"
                  />
                </Center>
                )}
              </Stack>
            </Box>
            form
          </Stack>
        </Container>
        <Blur
          position="absolute"
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />
      </Box>
      {conditions
        && (
        <Modal
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{conditions.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {conditions.paragraphes.map((el, i) => (
                <React.Fragment key={i}>
                  <Text pb={2}>
                    {el.paragraphe}
                  </Text>
                </React.Fragment>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Fermer</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        )}
    </React.Fragment>
  );
};

export const Blur = (props: IconProps): JSX.Element => (
  <Icon
    width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
    zIndex={-1}
    height="560px"
    viewBox="0 0 528 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="71"
      cy="61"
      r="111"
      fill="#2fbbf7"
    />
    <circle
      cx="244"
      cy="106"
      r="139"
      fill="#1f92f0"
    />
    <circle
      cy="291"
      r="139"
      fill="#6271e3"
    />
    <circle
      cx="80.5"
      cy="189.5"
      r="101.5"
      fill="#6271e3"
    />
    <circle
      cx="196.5"
      cy="317.5"
      r="101.5"
      fill="#62b8e3"
    />
    <circle
      cx="70.5"
      cy="458.5"
      r="101.5"
      fill="#6a7efc"
    />
    <circle
      cx="426.5"
      cy="-0.5"
      r="101.5"
      fill="#2189ff"
    />
  </Icon>
);

export default Contact;
