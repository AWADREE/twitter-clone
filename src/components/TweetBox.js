import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import { dbp } from "../firebase";
import firebase from "firebase";

function TweetBox(props) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (event) => {
    //preventinf the form from refreshing
    event.preventDefault();
    // accessing the db and adding a new doc to it with the values from th following object
    dbp.add({
      displayName: props.currentUser.email,
      username: props.currentUser.email,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //then clearing the input fields to blank
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />

          <input
            onChange={(event) => setTweetMessage(event.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(event) => setTweetImage(event.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
