import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Project = ({ data }) => {
  const { id, projectDescription, projectImage, projectName, projectUrl } =
    data;
  return (
    <li key={id}>
      <Card className="flex flex-col w-96 ">
        <Link to={`/portfolio/${id}`}>
          <CardHeader floated={false} className="object-cover h-80">
            <img
              src={projectImage.url}
              alt="profile-picture"
              className="w-full h-full "
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {projectName}
            </Typography>
          </CardBody>
        </Link>
      </Card>
    </li>
  );
};

export default Project;
