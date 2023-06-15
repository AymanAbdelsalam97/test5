import React from "react";
import TeamMember from "./team-member";

const TeamMemberList = ({ data }) => {
  return (
    <ul className="flex flex-wrap w-full gap-8 member-list">
      {data &&
        data.map((member, index) => <TeamMember key={index} data={member} />)}
    </ul>
  );
};

export default TeamMemberList;
