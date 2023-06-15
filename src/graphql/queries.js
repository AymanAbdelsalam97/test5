import { gql } from "@apollo/client";

export const GET_TEAM_MEMBERS = gql`
  query getAllTeamMembers {
    teams {
      id
      profilePicture {
        id
        url
      }
      firstName
      lastName
      githubUsername
    }
  }
`;
export const GET_ALL_COURSES = gql`
  query GetAllCourses {
    courses(orderBy: indexNumber_ASC) {
      id
      courseName
      courseWeight
      courseChoice
      indexNumber
      trimesterId
      teams {
        id
        firstName
        lastName
      }
    }
  }
`;
export const GET_COURSE = gql`
  query getCourse($id: ID) {
    course(where: { id: $id }) {
      id
      courseName
      courseWeight
      courseDescription
      teams {
        id
        firstName
        lastName
        profilePicture {
          id
          url
        }
      }
    }
  }
`;
export const GET_TEAMMEMBER = gql`
  query GET_TEAMMEMBER($id: ID = "clio9h7m75ufu0amf6y5o41kd") {
    team(where: { id: $id }) {
      id
      firstName
      lastName
      githubUsername
      memberDescription
      profilePicture {
        id
        url
      }
      courses {
        id
        courseName
      }
    }
  }
`;
export const GET_PROJECTS = gql`
  query Get_ALL_PROJECTS {
    portfolios {
      id
      projectDescription
      projectImage {
        id
        url
      }
      projectName
      projectUrl
    }
  }
`;
export const GET_PROJECT = gql`
  query GET_PROJECT($id: ID) {
    portfolio(where: { id: $id }) {
      id
      projectDescription
      projectImage {
        id
        url
      }
      projectUrl
      projectName
    }
  }
`;

export const LOGIN_AUTH_USER = gql`
  query getLoggedInUser($email: String!) {
    authUser(where: { email: $email }) {
      id
      email
      password
    }
  }
`;
export const GET_AUTHUSER_PROFILE = gql`
  query getAuthUSERProfileByEmail($email: String = "nio@email.com") {
    authUser(where: { email: $email }) {
      id
      username
      profile {
        id
        profilePicture {
          id
          url
        }
      }
    }
  }
`;
export const GET_AUTHUSER_ALLINFO = gql`
  query getAllInfoAuthUser($email: String) {
    authUser(where: { email: $email }) {
      id
      username
      email
      profile {
        id
        firstname
        lastname
        profilePicture {
          id
          url
        }
        address
        city
        country
        postalCode
        aboutMe
      }
    }
  }
`;
export const GET_ALL_COMMUNITIES_WITH_POSTS = gql`
  query GetAllCOmmunities {
    communities {
      id
      name
      description
      type
      communityPicture {
        id
        url
      }
      posts {
        id
        title
        tags {
          id
          name
        }
        body {
          html
        }
      }
    }
  }
`;
export const GET_ACOUNT_INFO = gql`
  query GetAccountInfo($id: ID = "") {
    authUser(where: { id: $id }) {
      id
      email
      password
      profile {
        id
        firstname
        lastname
      }
    }
  }
`;
export const GET_POSTS_BY_COMMUNITY = gql`
  query GetPostsByCommunity($id: ID = "") {
    community(where: { id: $id }) {
      id
      posts {
        id
        title
        tags {
          id
          name
        }
        imageLink {
          url
        }
      }
    }
  }
`;
export const GET_POST_BY_ID = gql`
  query GetPostById($id: ID = "") {
    post(where: { id: $id }) {
      id
      title
      body {
        html
      }
      imageLink {
        url
      }
      authuser {
        username
        profile {
          profilePicture {
            url
          }
        }
      }
    }
  }
`;
export const GET_ALL_TAGS = gql`
  query getAllTags {
    tags {
      id
      name
    }
  }
`;
export const GET_ALL_SERVICES = gql`
  query GET_AllServices {
    services {
      id
      serviceName
      servicePicture {
        url
      }
      description
    }
  }
`;
export const GET_SERVICE_BY_ID = gql`
  query GET_SERVICE_BY_ID($id: ID = "") {
    service(where: { id: $id }) {
      id
      serviceName
      servicePicture {
        url
      }
      description
    }
  }
`;
