//rfce
import React from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { dbp } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

import FlipMove from "react-flip-move";

function Feed(props) {
  const query = dbp.orderBy("createdAt", "desc").limit(1000);

  const [posts] = useCollectionData(query, {
    idField: "id",
  });

  return (
    <div className="feed">
      <div className="feed__header">
        <h3>Home</h3>
      </div>
      <TweetBox currentUser={props.currentUser} />

      <FlipMove>
        {posts &&
          posts.map((post) => (
            <Post
              key={post.id}
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
