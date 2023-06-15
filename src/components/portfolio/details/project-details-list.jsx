import React from "react";
import ProjectDetails from "./project-details";
const ProjectDetailsList = ({ data }) => {
  const arr = [data];
  return (
    <ul className="flex flex-wrap w-full gap-8 mx-auto my-10 project-details-list max-w-7xl">
      {data &&
        arr.map((project, index) => (
          <ProjectDetails key={index} data={project} />
        ))}
    </ul>
  );
};

export default ProjectDetailsList;
