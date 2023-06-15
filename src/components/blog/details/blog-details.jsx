import React from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetails = ({ data }) => {
  const { id, imageLink, tags, title } = data;

  const { communityId } = useParams();

  return (
    <ul className="flex gap-6">
      <li
        key={id}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <Link to={`/blog/${communityId}/${id}`}>
          <img
            className="object-cover w-full rounded-t-lg h-80 aspect-square"
            src={imageLink?.url}
            alt=""
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>

            <div className="flex flex-col bottom">
              <h1 className="my-6 text-2xl ">Tags</h1>
              <ul className="flex gap-6 my-2">
                {tags.map((tag) => (
                  <li className="my-2" key={tag.id}>
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>
            <button
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default BlogDetails;
