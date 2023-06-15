import { useEffect, useState } from "react";
import { TeamMemberList, TeamMemberSearch } from "../../components";
import { useQuery } from "@apollo/client";
import { GET_TEAM_MEMBERS } from "../../graphql";
const TeamPage = () => {
  // Load Data
  const { loading, error, data } = useQuery(GET_TEAM_MEMBERS);
  const memberData = data?.teams;
  const [teamMembers, setTeamMembers] = useState();

  useEffect(() => {
    setTeamMembers(memberData);
  }, [memberData]);
  const handleSearch = (searchStr) => {
    const filteredMembers = memberData.filter((member) => {
      const { firstName, lastName, masterNumber, zipCode } = member;
      const memberInfo = `${firstName} ${lastName} ${masterNumber} ${zipCode}}`;
      return memberInfo.toLowerCase().includes(searchStr.toLowerCase());
    });
    setTeamMembers(filteredMembers);
  };
  return (
    <>
      <section className="overflow-x-hidden lg:my-0 lg:px-6 lg:mx-auto main-content lg:max-w-7xl">
        <TeamMemberSearch onSearch={handleSearch} />
        {data && <TeamMemberList data={teamMembers} />}
      </section>
    </>
  );
};

export default TeamPage;
