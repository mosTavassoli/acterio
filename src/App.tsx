import Posts from "./pages/Posts/index";
import { Routes, Route, Navigate } from "react-router-dom";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostDetails />} />
    </Routes>
  );
}

export default App;
