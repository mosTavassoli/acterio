import { PostsType } from "../../types/types";
import SearchIcon from "../Icon";
import Post from "./Post";

type PostsProps = {
  posts: PostsType[];
  deletePost: (id: number) => void;
  filterPosts: (searchQuery: string) => void;
};

const Posts = ({ posts, deletePost, filterPosts }: PostsProps) => {
  return (
    <section className="p-5">
      <div className="relative">
        <SearchIcon className="text-gray-400 absolute top-3 left-3" />
        <input
          type="text"
          className="border-2 w-full lg:w-[50%] py-2 rounded-xl border-gray-400  px-14 text-lg"
          onChange={(event) => filterPosts(event?.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5 ">
        {posts.map((post) => (
          <Post key={post.id} post={post} deletePost={deletePost} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
