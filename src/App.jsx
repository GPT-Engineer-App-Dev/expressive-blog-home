import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  const addNewPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} />} />
        <Route path="/add-post" element={<AddPost addNewPost={addNewPost} />} />
      </Routes>
    </Router>
  );
}

export default App;
