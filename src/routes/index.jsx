import {
  HomePage,
  AboutPage,
  ContactPage,
  BlogPage,
  BlogDetailsPage,
  CoursesPage,
  CurriculumPage,
  PortFolioPage,
  ServicesPage,
  TeamPage,
  TeamDetailsPage,
  CoursesPageDetail,
  LoginPage,
  RegisterPage,
  PortFolioDetailsPage,
  ServicesDetailPage,
} from "../pages";
import { BlogDetailsListPage } from "../pages/blogs";
import { ProfilePage, ProfileSettingsPage } from "../pages/profile";

export const ROUTES = [
  { name: "login", path: "/login", Element: LoginPage },
  { name: "register", path: "/register", Element: RegisterPage },
  { name: "Home", path: "/", Element: HomePage },
  { name: "About", path: "/about", Element: AboutPage },
  { name: "Contact", path: "/contact", Element: ContactPage },
  {
    name: "Blogs",
    path: "/blog",
    Element: BlogPage,
    children: [
      {
        name: "blog-list",
        path: "/blog/:communityId",
        Element: BlogDetailsListPage,
      },
      {
        name: "blog details",
        path: "/blog/:communityId/:postId",
        Element: BlogDetailsPage,
      },
    ],
  },
  {
    name: "Account",
    path: "/account",
    Element: ProfilePage,
    children: [
      {
        name: "Settings",
        path: "/account/settings",
        Element: ProfileSettingsPage,
      },
    ],
  },
  {
    name: "Courses",
    path: "/courses",
    Element: CoursesPage,
    children: [
      { name: "Course", path: "/courses/:id", Element: CoursesPageDetail },
    ],
  },
  // { path: "/courses/:courseId", Element: CoursesDetailsPage },
  { name: "Curriculum", path: "/curriculum", Element: CurriculumPage },
  {
    name: "Portfolios",
    path: "/portfolio",
    Element: PortFolioPage,
    children: [
      {
        name: "Portfolio",
        path: "/portfolio/:id",
        Element: PortFolioDetailsPage,
      },
    ],
  },
  {
    name: "Services",
    path: "/services",
    Element: ServicesPage,
    children: [
      {
        name: "Services Details ",
        path: "/services/:id",
        Element: ServicesDetailPage,
      },
    ],
  },
  {
    name: "Team",
    path: "/team",
    Element: TeamPage,
    children: [
      { name: "Team-Member", path: "/team/:id", Element: TeamDetailsPage },
    ],
  },
];
