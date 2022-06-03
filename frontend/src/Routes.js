import React from "react";
import { Route, Routes } from "react-router-dom";
import Discover from "./components/Discover";
import Forum from "./components/Forum";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AccessToken from "./contexts/AccessToken";
import Stats from "./components/Stats";
import InnerForum from "./components/InnerForum";
import EditProfile from "./components/EditProfile.js";

export default function Links() {
  return (
    <AccessToken>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="discover" element={<Discover />} />
        <Route path="forum" element={<Forum />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="forum-post" element={<InnerForum />} />
        <Route path="edit-profile" element={<EditProfile />} />
      </Routes>
    </AccessToken>
  );
}
