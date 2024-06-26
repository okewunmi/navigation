import React from "react";
import { Wrapper } from "./Styles";
import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const postsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsArray);
    };

    fetchPosts();
  }, []);
  return (
    <Wrapper>
      <h1 className="heading">Annoucement</h1>
      <section className="container">
        {posts.map((post, index) => (
          <div key={post.id} className="box">
            <div className="head">
              <h2>Title:</h2>
              <p> {post.title}</p>
            </div>
            <div className="head">
              <h2>Details :</h2>
              <p>{post.description}</p>
            </div>
            <div className="head">
              <h2>venue :</h2>
              <p>{post.venue}</p>
            </div>
            <div className="time">
              <div className="time-time">
                <IoMdTime />
                <p>{post.time}</p>
              </div>
              <div className="time-date">
                <MdOutlineDateRange />
                <p>{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Wrapper>
  );
};

export default Post;
