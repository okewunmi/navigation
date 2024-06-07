import React from "react";
import { Wrapper } from "./styles";
import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const Index = () => {
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
      setPosts(posts.filter((post) => post.id !== id));
      alert("Post was deleted successfully!");
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };
  return (
    <Wrapper>
      <div className="container">
        {posts.map((post) => (
          <div key={post.id} className="box">
            <div className="heading">
              <h2>Title:</h2>
              <p> {post.title}</p>
            </div>

            <div className="heading">
              <h2>Details :</h2>
              <p>{post.description}</p>
            </div>
            <div className="heading">
              <h2>venue :</h2>
              <p>{post.venue}</p>
            </div>
            <div className="time">
              <div className="time-time">
                <h2>Time :</h2>
                <p>{post.time}</p>
              </div>
              <div className="time-date">
                <h2>Date :</h2>
                <p>{post.date}</p>
              </div>
            </div>
            <button onClick={() => handleDelete(post.id)} className="btn">
              Delete post
            </button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Index;
