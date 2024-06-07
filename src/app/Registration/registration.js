"use server";

import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { Wrapper } from "../../Components/Login/styles";

const page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    matricNumber: "",
    email: "",
    phoneNumber: "",
    course: "",
    department: "",
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
    const {
      email,
      password,
      fullName,
      matricNumber,
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
        matricNumber,
        email,
        phoneNumber,
        course,
        department,
      });

      alert("Registration successful!");
    } catch (error) {
      console.error("Error registering user:", error);
      alert(error.message);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="login">
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          name="matricNumber"
          placeholder="Matric Number"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <input
          name="course"
          placeholder="Course"
          onChange={handleChange}
          required
        />
        <input
          name="department"
          placeholder="Department"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </Wrapper>
  );
};
export default page;
