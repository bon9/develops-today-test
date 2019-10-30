import React from "react";
import { PostWrap, PublishDate, Description, Author } from "./Post.styles";

const Post = () => {
  return (
    <PostWrap>
      <Author>author</Author>
      <PublishDate>2019-25-12</PublishDate>
      <Description>shorе description</Description>
    </PostWrap>
  );
};

export default Post;
