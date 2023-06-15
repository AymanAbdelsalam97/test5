import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_POSTS_BY_COMMUNITY } from "../../graphql";
import {
  BlogDetailsList,
  BlogSearch,
  BlogDetailsFilter,
} from "../../components";

const BlogDetailsListPage = () => {
  const { communityId } = useParams();

  const { loading, error, data } = useQuery(GET_POSTS_BY_COMMUNITY, {
    variables: { id: communityId },
  });
  const blogData = data?.community;

  const [blog, setBlog] = useState();

  useEffect(() => {
    setBlog(blogData);
  }, [blogData]);
  const postData = blogData?.posts;
  const handleSearch = (searchStr) => {
    const filteredPosts = postData.filter((post) => {
      const { title, tags } = post;
      const tag = tags.map((tag) => tag.name).join(" ");
      const postInfo = `${title} ${tag}`;
      return postInfo.toLowerCase().includes(searchStr.toLowerCase());
    });
    setBlog(filteredPosts);
  };
  const handleFilter = (tagValue) => {
    const filteredPosts = postData.filter((post) => {
      const { tags } = post;
      const tag = tags.map((tag) => tag.name).join(" ");
      return tag.toLowerCase().includes(tagValue.toLowerCase());
    });
    setBlog(filteredPosts);
  };
  return (
    <>
      <section className="overflow-x-hidden lg:my-0 lg:px-6 lg:mx-auto main-content lg:max-w-7xl">
        <BlogSearch onSearch={handleSearch} />
        <BlogDetailsFilter onFilter={handleFilter} />
        {data && <BlogDetailsList data={blog} />}
      </section>
    </>
  );
};

export default BlogDetailsListPage;
