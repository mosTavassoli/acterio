import { PostsType } from "../../types/types";
import { PostsCMP } from "../../componenets/Posts";
import { useEffect, useState } from "react";
import { getPosts } from "../../api/api";

const Posts = () => {
  const [posts, setPosts] = useState<PostsType[]>();
  const deletePost = (id: number) => {
    setPosts(posts?.filter((post) => post.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);
  if (!posts) return null;

  return <PostsCMP posts={posts} deletePost={deletePost} />;
};

export default Posts;
