import { Profile, ProfileList } from "../../components/";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHUSER_ALLINFO } from "../../graphql";
const ProfilePage = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const email = token?.email;
  const { loading, error, data } = useQuery(GET_AUTHUSER_ALLINFO, {
    variables: { email: email },
  });

  const userData = data?.authUser;

  const [user, setUser] = useState();

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  return <>{data && <ProfileList data={user} />}</>;
};

export default ProfilePage;
