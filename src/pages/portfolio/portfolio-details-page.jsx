import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../graphql";
import { ProjectDetailsList } from "../../components";

const PortFolioDetailsPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id: id },
  });
  const projectData = data?.portfolio;
  const [project, setProject] = useState();

  useEffect(() => {
    setProject(projectData);
  }, [projectData]);

  return <>{data && <ProjectDetailsList data={project} />}</>;
};

export default PortFolioDetailsPage;
