import React from "react";
import Post from "./../Post/Post";
import {
  PostsWrap,
  Button,
  NewPostWrap,
  Input,
  Textarea
} from "./Posts.styles";

const Posts = () => {
  return (
    <>
      <PostsWrap>
        <Post />
        <Post />
      </PostsWrap>
      <NewPostWrap>
        <Input type="text" placeholder="title" />
        <Textarea type="text" placeholder="body" />
        <Button>Add new post</Button>
      </NewPostWrap>
    </>
  );
};

export default Posts;
