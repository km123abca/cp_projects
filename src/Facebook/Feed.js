import "./Feed.css";
import React, { useState, useEffect } from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("Posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) =>
        setPosts(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            profilePic: doc.data().profilePic,
            message: doc.data().message,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
            image: doc.data().image,
          }))
        )
      );
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => {
        // console.log(JSON.parse(post));

        return (
          <Post
            key={post.id}
            profilePic={post.profilePic}
            message={post.message}
            timestamp={post.timestamp}
            username={post.username}
            image={post.image}
          />
        );
      })}
    </div>
  );
}

export default Feed;
