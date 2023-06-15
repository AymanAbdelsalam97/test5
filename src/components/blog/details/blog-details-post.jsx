import React from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetailsPost = ({ data }) => {
  const { authuser, body, id, imageLink, title } = data;
  const author = authuser?.username;
  const html = body?.html;
  const picture = authuser?.profile?.profilePicture?.url;
  const image = imageLink?.url;
  return (
    <div className="max-w-5xl overflow-hidden ">
      <img
        className="object-cover w-full h-1/2 max-h-1/2 aspect-square"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <h1 className="mb-2 text-xl font-bold">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default BlogDetailsPost;
