import logo from "./logo.png";
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";

function Profile(props) {
    const [user, setUser] = useState()
    const {username, userList} = props;
    console.log(username)
    
    function filterUser(users, query) {
      if (!query) {
          return null;
      }
      return users.filter((usr) => {
          const userName = usr.username;
          return userName.includes(query);
      });
  }
    const loggedUser = filterUser(userList, username)
    return (
    <>
    
    <p> currently logged in as {username}</p>
      <div className="container emp-profille">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-md-6">
             
                <h5>
                    {username}
                </h5>
            
              <h6>Spotify Social Account</h6>
              <p className="profile-rating mt-3 mb-5"> Status: Basic/Premium</p>

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
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="settings-tab"
                    data-toggle="tab"
                    href="#settings"
                    role="tab"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>            
          </div>
          <div className="col-md-2">
          <LinkContainer to="/edit-profile">
              <Button>Edit Profile</Button>
            </LinkContainer>
            </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p></p>
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
                      <label>Username</label>
                    </div>
                    <div className="col-md-6">
                    {loggedUser && loggedUser.map (user => 
                <p key={user.id}>
                    {user.username}
                </p>
                    )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                    {loggedUser && loggedUser.map (user => 
                <p key={user.id}>
                    {user.name}
                </p>
            )}
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <p>Email</p>
                      </div>
                      <div className="col-md-6">
                      {loggedUser && loggedUser.map (user => 
                <p key={user.id}>
                    {user.email}
                </p>
            )}                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;