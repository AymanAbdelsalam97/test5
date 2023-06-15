import React from "react";
import Profile from "./profile";
const ProfileList = ({ data }) => {
  const arr = [];
  arr.push(data);
  return (
    <ul className="w-full mx-auto my-0 max-w-7xl">
      {data &&
        arr.map((profile, index) => <Profile key={index} data={profile} />)}
    </ul>
  );
};

export default ProfileList;
