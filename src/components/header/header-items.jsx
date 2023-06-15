import React from "react";
import { RiDashboard3Line } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { FaRing, FaTruckLoading } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
const HeaderItems = [
  {
    name: "Home",
    path: "/",
    icon: <RiDashboard3Line />,
  },
  {
    name: "Blogs",
    path: "/blog",
    icon: <GrMail />,
  },
  {
    name: "Courses",
    path: "/courses",
    icon: <FaTruckLoading />,
  },
  {
    name: "Portfolios",
    path: "/portfolio",
    icon: <FaTruckLoading />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <FaTruckLoading />,
  },
  {
    name: "Team",
    path: "/team",
    icon: <FaTruckLoading />,
  },
  {
    name: "About",
    path: "/about",
    icon: <BsPersonCircle />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <FaRing />,
  },
];

export default HeaderItems;
