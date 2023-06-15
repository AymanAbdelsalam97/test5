import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const TeamMember = ({ data }) => {
  const { firstName, lastName, profilePicture, id } = data;

  const fullName = `${firstName} ${lastName}`;
  return (
    <li className="">
      <Card className="flex flex-col w-96 ">
        <Link to={`/team/${id}`}>
          <CardHeader floated={false} className="object-cover h-80">
            <img
              src={profilePicture.url}
              alt="profile-picture"
              className="w-full h-full "
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {fullName}
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              Lecturer
            </Typography>
          </CardBody>
        </Link>
      </Card>
    </li>
  );
};

export default TeamMember;
