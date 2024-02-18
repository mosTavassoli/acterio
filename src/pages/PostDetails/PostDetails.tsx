import { getPostById } from "../../api/api";
import { PostsType } from "../../types/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostDetailsCMP } from "../../componenets/PostDetails";

const PostDetails = () => {
  const [post, setPost] = useState<PostsType>();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const post = await getPostById(params.id);
        setPost(post);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  if (!post) return null;

  return <PostDetailsCMP post={post} />;
};

export default PostDetails;
