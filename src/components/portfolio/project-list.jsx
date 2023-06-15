import React from "react";
import Project from "./project";
const ProjectList = ({ size, data }) => {
  let firstNumber = null;
  let secondNumber = null;
  if (size > 0) {
    firstNumber = Math.floor(Math.random() * data?.length);
    if (firstNumber > 6) {
      firstNumber = 6;
    }
    secondNumber = firstNumber + 6;
  } else {
    firstNumber = 0;
    secondNumber = data?.length;
  }
  return (
    <ul className="flex flex-wrap w-full gap-8 mx-auto my-10 project-list max-w-7xl">
      {data &&
        data
          .slice(firstNumber, secondNumber)
          .map((project, index) => <Project key={index} data={project} />)}
    </ul>
  );
};

export default ProjectList;
