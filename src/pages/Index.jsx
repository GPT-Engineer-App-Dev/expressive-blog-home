import { Box, Container, VStack, Text, Heading, Button, Image, Flex, Link, HStack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts }) => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">My Blog</Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" color="white">Home</Link>
            <Link as={RouterLink} to="#" color="white">About</Link>
            <Link as={RouterLink} to="#" color="white">Blog</Link>
            <Link as={RouterLink} to="#" color="white">Contact</Link>
            <Link as={RouterLink} to="/add-post" color="white">Add Post</Link>
          </HStack>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bgImage="url('/path/to/your/image.jpg')" bgSize="cover" bgPosition="center" color="white" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>Welcome to My Blog</Heading>
          <Text fontSize="xl" mb={8}>Sharing insights and stories from my journey.</Text>
          <Button colorScheme="teal" size="lg">Read Latest Posts</Button>
        </Container>
      </Box>

      {/* Blog Section */}
      <Box as="section" py={20}>
        <Container maxW="container.lg">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Latest Blog Posts</Heading>
          <VStack spacing={8}>
            {posts.map(post => (
              <Box key={post.id} p={5} shadow="md" borderWidth="1px" width="100%">
                <Heading fontSize="xl">{post.title}</Heading>
                {post.image && <Image src={post.image} alt={post.title} mt={4} />}
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={10}>
        <Container maxW="container.lg" textAlign="center">
          <Text mb={4}>Follow me on social media</Text>
          <HStack spacing={8} justify="center" mb={4}>
            <Link href="#"><FaTwitter size="24px" /></Link>
            <Link href="#"><FaFacebook size="24px" /></Link>
            <Link href="#"><FaInstagram size="24px" /></Link>
          </HStack>
          <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;