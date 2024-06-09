import React, { useState } from 'react';
import { Box, Container, VStack, Heading, Input, Textarea, Button, Image, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const AddPost = ({ addNewPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      image,
      id: Date.now(),
    };
    addNewPost(newPost);
    navigate('/');
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Add New Blog Post</Heading>
        <FormControl id="title" isRequired>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title" />
        </FormControl>
        <FormControl id="content" isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter the content" rows={6} />
        </FormControl>
        <FormControl id="image">
          <FormLabel>Image</FormLabel>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
          {image && <Image src={image} alt="Selected Image" mt={4} />}
        </FormControl>
        <Button colorScheme="teal" type="submit">Add Post</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;