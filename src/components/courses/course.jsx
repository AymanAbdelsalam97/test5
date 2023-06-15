import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const Course = ({ data }) => {
  const { id, courseChoice, courseName, courseWeight, teams, trimesterId } =
    data;
  const fullName = `${teams.firstName} ${teams.lastName}`;
  {
    /* <p>{courseChoice}</p>
      <p>{courseWeight}</p> */
  }
  {
    /* <p>{fullName}</p> */
  }
  return (
    <li className="max-w-xs ">
      <Card
        className={
          !courseChoice
            ? "bg-red-400 p-6 w-full h-full"
            : " w-96 bg-cyan-400 p-6 w-full h-full"
        }
      >
        <Link to={`/courses/${id}`}>
          <CardBody>
            <RocketLaunchIcon className="w-12 h-12 mb-4 text-blue-500" />
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
            >
              <p>{courseName}</p>
            </Typography>
            <Typography>Kom Meer te weten over dit Vak</Typography>
          </CardBody>
        </Link>
      </Card>
    </li>
  );
};

export default Course;
