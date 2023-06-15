import { useEffect, useState } from "react";
import { BlogList, BlogSearch } from "../../components";
import { useQuery } from "@apollo/client";
import { GET_ALL_COMMUNITIES_WITH_POSTS } from "../../graphql";

const BlogPage = ({ limit, hideSearch }) => {
  const { loading, error, data } = useQuery(GET_ALL_COMMUNITIES_WITH_POSTS);
  const blogData = data?.communities;
  const [post, setPosts] = useState();

  useEffect(() => {
    setPosts(blogData);
  }, [blogData]);

  const handleSearch = (searchStr) => {
    const filteredPosts = blogData.filter((post) => {
      const { description, name, type } = post;
      const postInfo = `${description} ${name} ${type}}`;
      return postInfo.toLowerCase().includes(searchStr.toLowerCase());
    });
    setPosts(filteredPosts);
  };
  return (
    <>
      <section className="overflow-x-hidden lg:my-0 lg:mx-auto main-content lg:max-w-7xl">
        <BlogSearch hide={hideSearch} onSearch={handleSearch} />

        {data && <BlogList size={limit} data={post} />}
      </section>
    </>
  );
};

export default BlogPage;
