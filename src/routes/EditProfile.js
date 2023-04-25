import { _signOut } from "fbase";
import React from "react";

const EditProfile = () => {
  const logoutAlert = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      _signOut();
    }
  };
  return (
    <div>
      <span>Edit profile</span>
      <button onClick={logoutAlert}>log-out</button>
    </div>
  );
};

export default EditProfile;
