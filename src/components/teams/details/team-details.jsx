import React from "react";
import { Link } from "react-router-dom";
const TeamDetails = ({ data }) => {
  const {
    courses,
    firstName,
    lastName,
    githubUsername,
    memberDescription,
    profilePicture,
  } = data;

  const fullName = firstName + " " + lastName;
  const picture = profilePicture?.url;

  const course = courses.map((course, index) => {
    return (
      <li key={index} className="text-lg text-bold">
        <Link to={`/courses/${course.id}`}>- {course.courseName}</Link>
      </li>
    );
  });

  return (
    <div>
      <section className="max-w-2xl mx-auto my-0">
        <h1 className="py-10 text-4xl font-bold text-center"> {fullName}</h1>
        <img
          className="object-contain w-full max-h-96"
          src={picture}
          alt={fullName}
        />
        <h3 className="p-5 text-2xl text-blue-500">
          <a href={`https://github.com/${githubUsername}`} target="_blank">
            {" "}
            {githubUsername}
          </a>
        </h3>
        <p className="p-5">{memberDescription}</p>
        <h2 className="mb-5 ml-5 text-2xl">
          Ik geef deze vakken in de opleiding
        </h2>
        <ul className="flex flex-col h-full max-w-xs gap-5 ml-5">{course}</ul>
      </section>
    </div>
  );
};

export default TeamDetails;
