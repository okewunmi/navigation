"use client";

import React, { useState, useEffect } from "react";
import { Content, Wrapper } from "./styles";
import video from "./welcome.mp4";
import Link from "next/link";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { IoSchool } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useAuth } from "../../../authContext";
import { FaUser } from "react-icons/fa";
import { PiLockKeyFill, PiStudentFill } from "react-icons/pi";
import { auth, db, setDoc, doc } from "../../../firebaseConfig";

import { useRouter } from "next/navigation";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const page = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { email, password } = formData;
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     alert("Login successful!");
  //     router.push("/");
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //     alert(error.message);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
      alert("Login successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <Wrapper>
      <Content>
        <video autoPlay loop muted controls preload="none">
          <source src={video} type="video/mp4" />
        </video>
        <div className="Overlay"></div>
        <div>
          <form className="login ">
            <h1 className=" head-3">{user ? "Welcome" : ""}</h1>
            {message && <p>{message}</p>}
            {user ? (
              <button onClick={handleSignOut} className="btn btn-login">
                Sign Out
              </button>
            ) : (
              <>
                <div className="input_box">
                  <FaUser className="input_box-icon" />
                  <input
                    type="text"
                    name="email"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="input_box">
                  <PiLockKeyFill className="input_box-icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <button className="btn btn-login" onClick={handleSubmit}>
                  Sign in
                </button>
                <Link
                  href="/Registration"
                  className="btn-create btns"
                  // onClick={() => setIsRegister(true)}
                >
                  creat account <HiArrowLongRight className="icon" />
                </Link>
              </>
            )}
          </form>
        </div>
      </Content>
    </Wrapper>
  );
};

export default page;
