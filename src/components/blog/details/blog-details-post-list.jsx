import React from "react";
import BlogDetailsPost from "./blog-details-post";

const BlogDetailsPostList = ({ data }) => {
  const arr = [data];
  return (
    <ul className="flex flex-wrap w-full gap-8 mx-auto my-10 blog-details-post-list max-w-7xl">
      {data &&
        arr.map((project, index) => (
          <BlogDetailsPost key={index} data={project} />
        ))}
    </ul>
  );
};

export default BlogDetailsPostList;
