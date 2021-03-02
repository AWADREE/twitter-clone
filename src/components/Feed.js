//rfce
import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { dbp } from "../firebase";
import FlipMove from "react-flip-move";

function Feed(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbp.onSnapshot(
      (snapshot) => setPosts(snapshot.docs.map((doc) => doc.data()))
      //this will give an array of all the data from each doc which are the props from each post inside the database
      // db.collection("posts").onSnapshot(
      //   (snapshot) => setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  // empty brakets mean load when the Feed component loads, and dont run it again after

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox currentUser={props.currentUser} />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
