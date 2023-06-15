import React from "react";
import BlogDetails from "./blog-details";

const BlogDetailsList = ({ data }) => {
  const postData = data?.posts || data;

  return (
    <ul className="flex flex-wrap w-full gap-8 mx-auto my-10 blog-details-list max-w-7xl">
      {data &&
        postData?.map((project, index) => (
          <BlogDetails key={index} data={project} />
        ))}
    </ul>
  );
};

export default BlogDetailsList;
