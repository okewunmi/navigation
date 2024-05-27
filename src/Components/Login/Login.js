"use client";

import React from "react";
import { Content, Wrapper } from "./styles";
import video from "./welcome.mp4";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

const page = () => {
  return (
    <Wrapper>
      <Content>
        <video autoPlay loop muted controls preload="none">
          <source src={video} type="video/mp4" />
        </video>
        <div className="Overlay"></div>
        <div>
          <form className="login">
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <button className="btn-login">Sign in</button>

            <button className="btn-create" href="#">
              creat account <MdArrowRightAlt className="icon" />
            </button>
          </form>
        </div>
      </Content>
    </Wrapper>
  );
};

export default page;
