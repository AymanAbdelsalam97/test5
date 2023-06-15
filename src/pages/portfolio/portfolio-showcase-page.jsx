import { useEffect, useState } from "react";

import { ProjectList, ProjectSearch } from "../../components";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../graphql";

const PortFolioPage = ({ limit, hideSearch }) => {
  // Load Data
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const projectData = data?.portfolios;
  const [projects, setProjects] = useState();
  useEffect(() => {
    setProjects(projectData);
  }, [projectData]);

  const handleSearch = (searchStr) => {
    const filteredProjects = projectData.filter((project) => {
      const { projectName } = project;
      return projectName.toLowerCase().includes(searchStr.toLowerCase());
    });
    setProjects(filteredProjects);
  };
  return (
    <div>
      <ProjectSearch hide={hideSearch} onSearch={handleSearch} />
      {data && <ProjectList size={limit} data={projects} />}
    </div>
  );
};

export default PortFolioPage;
