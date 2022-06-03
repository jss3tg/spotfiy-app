import logo from "./logo.png";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LinkContainer } from "react-router-bootstrap";
import EditProfile from "./EditProfile";
import { Helmet } from "react-helmet";

function Profile(props) {
  const [showForm, setShowForm] = useState(false);
  const showEditForm = () => {
    setShowForm(!showForm);
  };
  const [user, setUser] = useState();
  const { username, userList } = props;
  console.log(userList);
  function filterUser(users, query) {
    if (!query) {
      return null;
    }
    return users.filter((usr) => {
      const userName = usr.username;
      return userName.includes(query);
    });
  }
  const loggedUser = filterUser(userList, username);
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div style={{ display: "none" }}>
        {userList &&
          userList.map((update) => (
            <EditProfile key={update.id} data={update} />
          ))}
      </div>
      {/* <p> Currently Logged in as {username}</p> */}
      <div className="container emp-profille">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-md-6">
              <h5 style={{ color: "#1DB954" }}> {username}</h5>
              <p>Spotify Social Account</p>
              <p
                className="profile-rating mt-3 mb-5"
                style={{ color: "#1DB954" }}
              >
                {" "}
                Status: Premium
              </p>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                  >
                    General Information
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    id="settings-tab"
                    data-toggle="tab"
                    href="#settings"
                    role="tab"
                  >
                    Settings
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <LinkContainer to="/edit-profile">
            <Button onClick={showEditForm}>Edit Profile</Button>
          </LinkContainer>

          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p></p>

                <label style={{ color: "#1DB954" }}>
                  <strong>Followers:</strong>
                </label>
                <p>
                  {loggedUser &&
                    loggedUser.map((user) => (
                      <p key={user.id}>{user.followers}</p>
                    ))}{" "}
                </p>

                <label style={{ color: "#1DB954" }}>
                  <strong>Following:</strong>
                </label>
                <p>
                  {loggedUser &&
                    loggedUser.map((user) => (
                      <p key={user.id}>{user.following}</p>
                    ))}{" "}
                </p>
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-2">
                      <label style={{ color: "#1DB954" }}>
                        <strong>Username</strong>
                      </label>
                    </div>
                    <div className="col-md-6">
                      {loggedUser &&
                        loggedUser.map((user) => (
                          <p key={user.id}>{user.username}</p>
                        ))}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <label style={{ color: "#1DB954" }}>
                        {" "}
                        <strong>Name</strong>
                      </label>
                    </div>
                    <div className="col-md-6">
                      {loggedUser &&
                        loggedUser.map((user) => (
                          <p key={user.id}>{user.name}</p>
                        ))}
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <label style={{ color: "#1DB954" }}>
                          <strong>Email</strong>
                        </label>
                      </div>
                      <div className="col-md-6">
                        {loggedUser &&
                          loggedUser.map((user) => (
                            <p key={user.id}>{user.email}</p>
                          ))}{" "}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <label style={{ color: "#1DB954" }}>
                          <strong>Phone Number</strong>
                        </label>
                      </div>
                      <div className="col-md-6">
                        {loggedUser &&
                          loggedUser.map((user) => (
                            <p key={user.id}>{user.phoneNumber}</p>
                          ))}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {showForm && <EditProfile />}
      </div>
    </>
  );
}
export default Profile;
