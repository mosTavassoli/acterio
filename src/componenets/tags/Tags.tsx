type TagsProps = {
  tags: string[];
  classes?: string;
};

const Tags = ({ tags, classes }: TagsProps) => {
  return (
    <div className={`flex mt-auto gap-2 capitalize text-gray-500 ${classes}`}>
      {tags.map((tag, index) => (
        <p
          className=" after:pl-1 after:content-['-'] last:after:content-['']"
          key={index}
        >
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
