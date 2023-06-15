import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_TAGS } from "../../../graphql";

const BlogDetailsFilter = ({ onFilter }) => {
  const { loading, error, data } = useQuery(GET_ALL_TAGS);
  const [tags, setTags] = useState();
  const [tagValue, setTagValue] = useState();
  useEffect(() => {
    setTags(data?.tags);
  }, [data]);

  const tag = tags?.map((tag) => (
    <li key={tag.id}>
      <label htmlFor={tag.name} className="flex gap-5">
        <input
          type="radio"
          name="abc"
          id={tag.name}
          value={tag.name}
          onChange={(e) => onFilter(e.target.value)}
        />
        {tag.name}
      </label>
    </li>
  ));

  return <ul>{tag}</ul>;
};

export default BlogDetailsFilter;
