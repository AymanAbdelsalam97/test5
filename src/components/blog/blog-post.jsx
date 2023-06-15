import React from "react";
import { Link } from "react-router-dom";
const BlogPost = ({ data }) => {
  const { id, description, name, posts, type, communityPicture } = data;

  const post = posts.reduce((acc, curr) => {
    const { body, tags, title } = curr;
    acc = { body, tags, title };
    return acc;
  }, {});
  const { body, tags, title } = post;
  const picture = communityPicture.url;
  const tag = tags?.map((tag) => <li key={tag.id}>{tag.name}</li>);
  return (
    <li>
      <Link to={`/blog/${id}`}>
        <div className="max-w-lg mx-auto">
          <div className="max-w-sm mb-5 bg-white border border-gray-200 rounded-lg shadow-md">
            <img
              className="object-cover w-full rounded-t-lg aspect-square"
              src={picture}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 capitalize">
                {description}
              </p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                Read more
              </button>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default BlogPost;
