"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { auth, db } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

import { Wrapper, Content } from "./styles";

import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { IoSchool } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiLockKeyFill, PiStudentFill } from "react-icons/pi";
import Link from "next/link";

const Register = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    NDA_NO: "",
    email: "",
    phoneNumber: "",
    course: "",
    department: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email,
      password,
      fullName,
      NDA_NO,
      phoneNumber,
      course,
      department,
    } = formData;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save additional user info to Firestore
      await setDoc(doc(db, "students", user.uid), {
        uid: user.uid,
        fullName,
        NDA_NO,
        email,
        phoneNumber,
        course,
        department,
      });

      // setShowSuccess(true); // Show success message
      setShowSuccess("Registration successful!");
      setForm({
        fullName: "",
        NDA_NO: "",
        email: "",
        phoneNumber: "",
        course: "",
        department: "",
        password: "",
      });
      setTimeout(() => {
        // Redirect to login page after 3 seconds
        setShowSuccess("");
        router.push("/login");
      }, 3000);
    } catch (error) {
      console.error("Error registering user:", error);
      alert(error.message);
      setShowSuccess(error.message);
    }
  };

  return (
    <Wrapper>
      <Content>
        <div className="form-box">
          {/* {showSuccess ? (
            <div className="success-message">
              <h1>Registration successful!</h1>
              <p>Redirecting to login page...</p>
            </div>
          ) : ( */}
          {showSuccess ? (
            <>
              <p className="login">you've successfully Regiter </p>
              <Link href="/" className="btn-create">
                go back to Home <HiArrowLongRight className="icon" />
              </Link>
            </>
          ) : (
            <form className="login " onSubmit={handleSubmit}>
              <h1 className="head-2">Sign up</h1>
              <div className="input_box">
                <FaUser className="input_box-icon-2" />
                <input
                  className="input-2"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input_box">
                <FaUser className="input_box-icon-2" />
                <input
                  className="input-2"
                  name="NDA_NO"
                  placeholder="NDA_NO"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input_box">
                <MdEmail className="input_box-icon-2" />
                <input
                  className="input-2"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input_box">
                <FaPhone className="input_box-icon-2" />
                <input
                  className="input-2"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input_box">
                <IoSchool className="input_box-icon-2" />
                <input
                  className="input-2"
                  name="course"
                  placeholder="Course"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input_box">
                <PiStudentFill className="input_box-icon-2" />
                <input
                  className="input-2"
                  name="department"
                  placeholder="Department"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input_box">
                <PiLockKeyFill className="input_box-icon-2" />
                <input
                  className="input-2"
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <button type="submit" className="btn-login">
          Register
        </button> */}
              <button type="submit" className="btn btn-reg">
                {/* <HiArrowLongLeft className="icon" /> */}
                Register
              </button>
              <Link href="/Login" className="btn-home btns">
                back to Login <HiArrowLongRight className="icon" />
              </Link>
            </form>
          )}
          {/* )} */}
        </div>
      </Content>
    </Wrapper>
  );
};

export default Register;
