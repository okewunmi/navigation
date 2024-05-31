"use client";

import React, { useState } from "react";
import { Content, Wrapper } from "./styles";
import video from "./welcome.mp4";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
  };

  return (
    <Wrapper>
      <Content>
        <video autoPlay loop muted controls preload="none">
          <source src={video} type="video/mp4" />
        </video>
        <div className="Overlay"></div>
        <div>
          <form className="login">
            <input
              type="text"
              name="email"
              placeholder="Username"
              onChange={handleChange}
              required
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            ></input>
            <button className="btn-login" onClick={handleSubmit}>
              Sign in
            </button>
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
