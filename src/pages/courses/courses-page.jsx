import { useEffect, useState } from "react";

import { CourseList, CourseSearch } from "../../components/courses";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSES } from "../../graphql";
const CoursesPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_COURSES);
  const courseData = data?.courses;
  const [courses, setCourses] = useState();
  useEffect(() => {
    setCourses(courseData);
  }, [courseData]);

  const handleSearch = (searchStr) => {
    const filteredCourses = courseData.filter((course) => {
      const { courseName, trimesterId } = course;
      const trimester = `trimester ${trimesterId}`;
      const courseInfo = `${courseName} ${trimester} `;
      return courseInfo.toLowerCase().includes(searchStr.toLowerCase());
    });
    setCourses(filteredCourses);
  };

  return (
    <div>
      <section className="overflow-x-hidden lg:my-0 lg:px-6 lg:mx-auto main-content lg:max-w-7xl">
        <CourseSearch onSearch={handleSearch} />
        {data && <CourseList data={courses} />}
      </section>
    </div>
  );
};

export default CoursesPage;
