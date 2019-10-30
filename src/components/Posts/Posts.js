import React, { useState } from "react";
import PropTypes from "prop-types";

import Post from "./../Post/Post";
import {
  PostsWrap,
  Button,
  NewPostWrap,
  Input,
  Textarea
} from "./Posts.styles";

Post.propTypes = {
  posts: PropTypes.array,
  onCreatePost: PropTypes.func,
  onDeletePost: PropTypes.func
};

function Posts({ posts, onCreatePost, onDeletePost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  if (!posts) {
    return null;
  }

  const handleChange = (e, type) => {
    if (type === "title") {
      setTitle(e.target.value);
    }
    if (type === "body") {
      setBody(e.target.value);
    }
  };

  const handleClick = () => {
    const newPost = {
      title,
      body
    };
    setTitle("");
    setBody("");
    onCreatePost(newPost);
  };

  const outputPosts = posts.map(post => {
    return (
      <Post
        title={post.title || "Title post"}
        body={post.body || "Body post"}
        creator={post.creator || "Anybody"}
        date={post.date || "Body date"}
        id={post.id}
        key={post.id}
        onDeletePost={onDeletePost}
      />
    );
  });

  return (
    <>
      <PostsWrap>{outputPosts}</PostsWrap>
      <NewPostWrap>
        <Input
          type="text"
          placeholder="title"
          onChange={e => handleChange(e, "title")}
          value={title}
        />
        <Textarea
          type="text"
          placeholder="body"
          onChange={e => handleChange(e, "body")}
          value={body}
        />
        <Button onClick={handleClick} disabled={!body || !title}>
          Add new post
        </Button>
      </NewPostWrap>
    </>
  );
}

export default Posts;
