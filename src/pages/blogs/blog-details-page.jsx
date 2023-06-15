import { useEffect, useState } from "react";
import { BlogDetailsPostList, BlogSearch } from "../../components";
import { useQuery } from "@apollo/client";
import { GET_POST_BY_ID } from "../../graphql";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  const { postId } = useParams();
  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: { id: postId },
  });
  const postData = data?.post;
  const [post, setPosts] = useState();

  useEffect(() => {
    setPosts(postData);
  }, [postData]);

  return <>{data && <BlogDetailsPostList data={post} />}</>;
};

export default BlogDetailsPage;
