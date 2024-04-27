// Personal website for "The King of Denmark"
import { Box, Container, Flex, Heading, Text, Image, VStack, SimpleGrid, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" my={10}>
        <Heading as="h1" size="2xl" mb={2}>
          The King of Denmark
        </Heading>
        <Text fontSize="xl" color="gray.500">
          A Royal Legacy
        </Text>
        <Image src="https://images.unsplash.com/photo-1697791132216-09e7808bebfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxLaW5nJTIwb2YlMjBEZW5tYXJrfGVufDB8fHx8MTcxNDIxMTc3OXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" mt={5} mb={10} />

        {/* Biography Section */}
        <VStack spacing={5} alignItems="start" w="full">
          <Heading as="h2" size="lg">
            Biography
          </Heading>
          <Text>Born into royalty, the King of Denmark has been a symbol of unity and strength for the nation. His reign has seen significant advancements in social policies and international diplomacy. A patron of arts and sciences, he has worked tirelessly to promote cultural enrichment and educational opportunities for all.</Text>
        </VStack>

        {/* Gallery Section */}
        <Box w="full" my={10}>
          <Heading as="h2" size="lg" mb={5}>
            Royal Gallery
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
            <Image src="https://images.unsplash.com/photo-1482424917728-d82d29662023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxLaW5nJTIwb2YlMjBEZW5tYXJrJTIwZXZlbnR8ZW58MHx8fHwxNzE0MjExNzc5fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" />
            <Image src="https://images.unsplash.com/photo-1533161167560-e48f8fc55dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxLaW5nJTIwb2YlMjBEZW5tYXJrJTIwZmFtaWx5fGVufDB8fHx8MTcxNDIxMTc3OXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" />
            <Image src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxLaW5nJTIwb2YlMjBEZW5tYXJrJTIwY2VyZW1vbnl8ZW58MHx8fHwxNzE0MjExNzc5fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" />
          </SimpleGrid>
        </Box>

        {/* Contact Information */}
        <VStack spacing={3} alignItems="start" w="full" as="footer" mt={10}>
          <Heading as="h2" size="lg">
            Contact Information
          </Heading>
          <Text>For inquiries, please contact the Royal Office:</Text>
          <Link href="mailto:contact@royaloffice.dk" isExternal>
            <Icon as={FaEnvelope} mr={2} />
            contact@royaloffice.dk
          </Link>
          <Text>Follow us on social media:</Text>
          <Flex>
            <Link href="https://facebook.com" isExternal mr={4}>
              <Icon as={FaFacebook} w={6} h={6} />
            </Link>
            <Link href="https://instagram.com" isExternal mr={4}>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
          </Flex>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;
