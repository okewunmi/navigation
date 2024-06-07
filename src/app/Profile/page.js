// pages/profile.js
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "students", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
        console.log(setUserData);
      } else {
        router.push("/Login");
      }
    };

    fetchUserData();
  }, [router]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Full Name: {userData.fullName}</p>
      <p>Matric Number: {userData.matricNumber}</p>
      <p>Email: {userData.email}</p>
      <p>Phone Number: {userData.phoneNumber}</p>
      <p>Course: {userData.course}</p>
      <p>Department: {userData.department}</p>
    </div>
  );
}
