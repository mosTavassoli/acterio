import { PostsType } from "../../types/types";
import { PostsCMP } from "../../componenets/Posts";
import { useEffect, useState } from "react";
import { getPosts } from "../../api/api";

const Posts = () => {
  const [posts, setPosts] = useState<PostsType[]>();
  const [filteredPosts, setFilteredPosts] = useState<PostsType[]>();

  const deletePost = (id: number) => {
    setPosts(posts?.filter((post) => post.id !== id));
  };

  const filterPosts = (searchQuery: string) => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts?.filter((post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
        setFilteredPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);
  if (!filteredPosts) return null;

  return (
    <PostsCMP
      posts={filteredPosts}
      deletePost={deletePost}
      filterPosts={filterPosts}
    />
  );
};

export default Posts;
