"use client";
import React from "react";
import Menu from "@/Components/MenuBar/Menu";
import Posting from "@/Components/Post/page";

const Post = () => {
  return (
    <main className="main">
      <Menu />
      <Posting />
    </main>
  );
};

export default Post;
