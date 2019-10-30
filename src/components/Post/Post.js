import React from "react";
import { Link } from "react-router-dom";

import {
  PostWrap,
  PublishDate,
  Description,
  Author,
  DeleteButton,
  Data
} from "./Post.styles";
const Post = ({ title, body, creator, date, id, onDeletePost }) => {
  return (
    <PostWrap>
      <Data>
        <Link to={`/posts/${id}`}>
          <Author>{creator}</Author>
          <PublishDate>{date}</PublishDate>
          <Description>{title}</Description>
        </Link>
      </Data>
      <DeleteButton onClick={() => onDeletePost(id)}>delete</DeleteButton>
    </PostWrap>
  );
};

export default Post;
