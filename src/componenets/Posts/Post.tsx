import { useState } from "react";
import { Link } from "react-router-dom";
import { PostsType } from "../../types/types";
import Modal from "../Modal";
import Tags from "../tags";

type PostProps = {
  post: PostsType;
  deletePost: (id: number) => void;
};

const Post = ({ post, deletePost }: PostProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const deletePostHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col border-4 rounded-xl p-3">
      <Link to={`./${post.id}`} key={post.id} className="flex flex-col h-full">
        <h1 className="py-2">{post.title}</h1>
        <h3 className="pb-2">{post.body}</h3>
        <Tags tags={post.tags} />
        <div className="flex gap-3 uppercase font-semibold">
          <span>Reactions:</span>
          <div>{post.reactions}</div>
        </div>
      </Link>

      <button
        onClick={() => deletePostHandler()}
        className="uppercase  bg-red-800 rounded text-white mx-auto mt-5 px-5 py-2 font-bold"
      >
        remove
      </button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <p className="text-lg capitalize font-bold">
          are you sure to remove the item with id {post.id} ?
        </p>
        <div className="flex ">
          <button
            onClick={closeModal}
            className="uppercase  bg-gray-500 rounded text-white mx-auto mt-5 px-5 py-2 font-bold"
          >
            No
          </button>
          <button
            onClick={() => deletePost(post?.id)}
            className="uppercase  bg-red-800 rounded text-white mx-auto mt-5 px-5 py-2 font-bold"
          >
            YES
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Post;
