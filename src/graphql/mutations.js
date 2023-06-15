import { gql } from "@apollo/client";
export const REGISTER_AUTH_USER = gql`
  mutation createAuthUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAuthUser(
      data: { username: $username, email: $email, password: $password }
    ) {
      id
    }
  }
`;

export const UPDATE_AUTH_USER = gql`
  mutation update_auth_user(
    $id: ID = ""
    $password: String = ""
    $email: String = ""
  ) {
    updateAuthUser(
      data: { email: $email, password: $password }
      where: { id: $id }
    ) {
      id
    }
  }
`;
export const UPDATE_PROFILE = gql`
  mutation update_profile(
    $id: ID = ""
    $lastname: String = ""
    $firstname: String = ""
  ) {
    updateProfile(
      data: { firstname: $firstname, lastname: $lastname }
      where: { id: $id }
    ) {
      id
    }
  }
`;
