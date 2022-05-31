import React from "react";
import { Route, Routes } from "react-router-dom";
import Discover from "./components/Discover"
import Forum from "./components/Forum";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="discover" element={<Discover/>} />
        <Route path="forum" element={<Forum />} />
        <Route path="profile" element={<Profile/>} />
        <Route path="login" element={<Login/>} />
    </Routes>
  );
}