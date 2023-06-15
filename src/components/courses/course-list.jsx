import React from "react";
import Course from "./course";
const CourseList = ({ data }) => {
  const trimesterArr = [];
  data?.map((course) => {
    if (!trimesterArr.includes(course.trimesterId)) {
      trimesterArr.push(course.trimesterId);
    }
  });
  return (
    <ul className="flex flex-wrap w-full gap-10 courses-list">
      {data &&
        trimesterArr.map((trimester, index) => {
          return (
            <li key={index} className="max-w-7xl">
              <h1 className="mb-8 text-4xl font-bold ">
                Trimester {trimester}
              </h1>
              <ul className="flex flex-wrap w-full gap-10 courses-list">
                {data.map((course, index) => {
                  if (course.trimesterId === trimester) {
                    return <Course key={index} data={course} />;
                  }
                })}
              </ul>
            </li>
          );
        })}
    </ul>
  );
};

export default CourseList;
