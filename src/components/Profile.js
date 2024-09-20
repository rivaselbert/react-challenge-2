import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        <h3>Profile</h3>
      </div>
      <div className="profile__item">
        <img src="user.jpg" />
        <h3 className="profile__item__name">Elbert Rivas</h3>
        <span>Software Engineer</span>
        <p className="profile__item__biography">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Profile;
