import React from "react";

const ProjectDetails = ({ data }) => {
  const { projectName, projectDescription, projectImage, projectUrl, id } =
    data;
  return (
    <div>
      <section className="max-w-2xl mx-auto my-0">
        <h1 className="py-10 text-4xl font-bold text-center"> {projectName}</h1>
        <img
          className="object-contain w-full max-h-96"
          src={projectImage.url}
          alt={projectName}
        />
        <h3 className="p-5 text-2xl text-blue-500"></h3>
        <p className="py-5 text-2xl">{projectDescription}</p>
        <h2 className="mb-5 text-2xl">
          Je kan de website
          <a href={projectUrl} target="_blank" className="px-5 text-red-500">
            hier
          </a>
          bekijken
        </h2>
      </section>
    </div>
  );
};

export default ProjectDetails;
