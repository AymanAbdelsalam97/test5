import React from "react";

import CourseDetails from "./course-details";
const CourseDetailsList = ({ data }) => {
  const arr = [data];
  return (
    <ul className="w-full mx-auto my-0 max-w-7xl">
      {data &&
        arr.map((course, index) => <CourseDetails key={index} data={course} />)}
    </ul>
  );
};

export default CourseDetailsList;
