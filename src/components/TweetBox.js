import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import { db } from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (event) => {
    //preventinf the form from refreshing
    event.preventDefault();
    // accessing the db and adding a new doc to it with the values from th following object
    db.collection("posts").add({
      displayName: "Angry van Cumbersome",
      username: "angerissues12",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSIbfes4K5CLLIAnBoKhAUGptxjtHQ9IKWQ&usqp=CAU",
    });
    //then clearing the input fields to blank
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSIbfes4K5CLLIAnBoKhAUGptxjtHQ9IKWQ&usqp=CAU" />

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
