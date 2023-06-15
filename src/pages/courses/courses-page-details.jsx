import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_COURSE } from "../../graphql";
import { CourseDetailsList } from "../../components";

const CoursesPageDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_COURSE, {
    variables: { id: id },
  });

  const courseData = data?.course;

  const [course, setCourse] = useState();

  useEffect(() => {
    setCourse(courseData);
  }, [courseData]);

  return <>{data && <CourseDetailsList data={course} />}</>;
};

export default CoursesPageDetail;
