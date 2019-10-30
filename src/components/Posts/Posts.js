import React from "react";
import PropTypes from "prop-types";

import Post from "./../Post/Post";
import {
  PostsWrap,
  Button,
  NewPostWrap,
  Input,
  Textarea
} from "./Posts.styles";
import useHandleChange from "../../hooks/useHandleChange";

Post.propTypes = {
  posts: PropTypes.array,
  onCreatePost: PropTypes.func,
  onDeletePost: PropTypes.func.isRequired
};

function Posts({ posts, onCreatePost, onDeletePost }) {
  const [titlePost, bodyPost, setData] = useHandleChange();

  if (!posts) {
    return null;
  }

  const handleClick = () => {
    const newPost = {
      titlePost,
      bodyPost
    };
    setData(null, "reset");
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
          onChange={e => setData(e, "title")}
          value={titlePost}
        />
        <Textarea
          type="text"
          placeholder="body"
          onChange={e => setData(e, "body")}
          value={bodyPost}
        />
        <Button onClick={handleClick} disabled={!bodyPost || !titlePost}>
          Add new post
        </Button>
      </NewPostWrap>
    </>
  );
}

export default Posts;
