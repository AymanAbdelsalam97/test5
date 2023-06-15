import React from "react";
import TeamDetails from "./team-details";
const TeamDetailsList = ({ data }) => {
  const arr = [data];
  return (
    <ul className="flex flex-wrap w-full gap-8 mx-auto my-10 team-details-list max-w-7xl">
      {data &&
        arr.map((team, index) => <TeamDetails key={index} data={team} />)}
    </ul>
  );
};

export default TeamDetailsList;
