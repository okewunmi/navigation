"use client";
import React, { useState } from "react";

import Menu from "@/Components/MenuBar/Menu";
import CreatPost from "@/Components/createPost/index";
import ViewAll from "@/Components/AllPost/index";
import { Content } from "./styles";

const Page = () => {
  const [view, setView] = useState("");

  const handleCreatePost = () => {
    setView("create");
  };

  const handleViewAllPosts = () => {
    setView("view");
  };
  return (
    <main className="main">
      <Menu />
      <Content>
        <h1 className="head">Dashboard</h1>
        <div className="container">
          <button className="btn" onClick={handleCreatePost}>
            create post
          </button>
          <button className="btn" onClick={handleViewAllPosts}>
            View all post
          </button>
        </div>
        {view === "create" && <CreatPost />}
        {view === "view" && <ViewAll />}
      </Content>

      {/* <CreatPost /> */}
    </main>
  );
};

export default Page;
