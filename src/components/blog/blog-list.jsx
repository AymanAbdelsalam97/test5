import React from "react";
import BlogPost from "./blog-post";
const BlogList = ({ data }) => {
  return (
    <ul className="flex flex-wrap w-full gap-8 blog-list">
      {data &&
        data
          .slice(0, 3)
          .map((post, index) => <BlogPost key={index} data={post} />)}
    </ul>
  );
};

export default BlogList;
