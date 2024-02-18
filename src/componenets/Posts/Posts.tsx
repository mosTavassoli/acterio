import { PostsType } from "../../types/types";
import Post from "./Post";

type PostsProps = {
  posts: PostsType[];
  deletePost: (id: number) => void;
};

const Posts = ({ posts, deletePost }: PostsProps) => {
  return (
    <section className="p-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-2 ">
        {posts.map((post) => (
          <Post key={post.id} post={post} deletePost={deletePost} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
