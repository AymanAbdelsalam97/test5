import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_TEAMMEMBER } from "../../graphql";
import { TeamDetailsList } from "../../components/teams";
const TeamDetailsPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TEAMMEMBER, {
    variables: { id: id },
  });
  const teamData = data?.team;
  const [team, setTeam] = useState();
  useEffect(() => {
    setTeam(teamData);
  }, [teamData]);

  return <>{data && <TeamDetailsList data={team} />}</>;
};

export default TeamDetailsPage;
