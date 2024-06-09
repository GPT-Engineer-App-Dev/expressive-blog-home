import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState, useEffect } from 'react';
import { ChakraProvider, extendTheme, CSSReset, useColorMode, Box, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  const [posts, setPosts] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  useEffect(() => {
    const savedColorMode = localStorage.getItem('chakra-ui-color-mode');
    if (savedColorMode) {
      document.documentElement.setAttribute('data-theme', savedColorMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chakra-ui-color-mode', colorMode);
  }, [colorMode]);

  return (
    <Box>
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        position="fixed"
        top="1rem"
        right="1rem"
      />
      <Router>
        <Routes>
          <Route exact path="/" element={<Index posts={posts} />} />
          <Route path="/add-post" element={<AddPost addNewPost={addNewPost} />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;