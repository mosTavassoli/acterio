import { useState } from "react";
import { PostsType } from "../../types/types";
import Tags from "../tags";

type PostDetailsProps = {
  post: PostsType;
};

const PostDetails = ({ post }: PostDetailsProps) => {
  const { body, reactions, tags, title } = post;

  const [reaction, setReaction] = useState<number>(post.reactions);

  const reactionHandler = () => {
    setReaction(reaction + 1);
  };

  return (
    <div className="py-20 px-20 xl:px-96 ">
      <h1 className="text-5xl pb-5 uppercase">{title}</h1>
      <Tags tags={post.tags} classes={`text-xl font-bold pb-5`} />
      <div className="flex gap-4 pb-5 text-lg uppercase font-bold text-green-500 justify-items-center items-baseline  border-b-2">
        <span>Reactions:</span>
        <div>{reaction}</div>
        <button
          className="w-10 h-10 border-2 rounded-full bg-slate-200 text-green-600"
          onClick={reactionHandler}
        >
          +
        </button>
      </div>
      <p className="text-2xl text-gray-500 pt-5">{body}</p>
    </div>
  );
};

export default PostDetails;
