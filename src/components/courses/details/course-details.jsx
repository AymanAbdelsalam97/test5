import React from "react";
import { Link } from "react-router-dom";
const CourseDetails = ({ data }) => {
  const { courseDescription, courseName, courseWeight, teams } = data;
  const teamMember = teams.map((team, index) => {
    return (
      <div key={index} className="flex flex-col h-full max-w-xs gap-6">
        <Link to={`/team/${team.id}`}>
          <img
            className="object-cover w-full h-64"
            src={team.profilePicture?.url}
            alt={team.firstName}
          />
          {team.firstName} {team.lastName}
        </Link>
      </div>
    );
  });

  return (
    <section className="flex flex-col max-w-5xl gap-8 p-8 mx-auto my-0 ">
      <h1 className="mb-6 text-5xl text-blue-900">{courseName}</h1>
      <p className="max-w-4xl text-lg">
        {courseDescription
          ? courseDescription
          : "i have no description because i was to lazy to add it"}
      </p>
      <h1 className="text-2xl text-blue-600">
        Dit vak heeft een ects-waarde van: {courseWeight}
      </h1>
      <h1 className="text-2xl">
        Dit vak wordt gegeven door:
        <div className="flex items-center gap-6 py-5">{teamMember}</div>
      </h1>
    </section>
  );
};

export default CourseDetails;
