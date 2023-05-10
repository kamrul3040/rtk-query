import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import AddPost from "./components/AddPost";
import Post from "./components/Post";
import Posts from "./components/Posts";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/posts/add" element={<AddPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
