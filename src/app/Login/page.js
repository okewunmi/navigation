"use client";
import "../globals.css";
import React from "react";
import Menu from "@/Components/MenuBar/Menu";
import Login from "@/Components/Login/Login";

const page = () => {
  return (
    <main className="main">
      <Menu />
      <Login />
    </main>
  );
};

export default page;
