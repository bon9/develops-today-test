import React from "react";
import Comments from "./Comments/Comments";
import {
  ViewPostWrap,
  Author,
  CreateDate,
  Title,
  Body,
  ButtonEdit,
  ButtonSave
} from "./ViewPost.styles";

const ViewPost = () => {
  return (
    <ViewPostWrap>
      <Author>Author</Author>
      <CreateDate>2015-15-15</CreateDate>
      <ButtonEdit>Edit post</ButtonEdit>
      <ButtonSave>Save Post</ButtonSave>
      <Title>titled sese aqe w3dkjkj dkfjdkrurkj jdk jkd j</Title>
      <Body>body fsdf sdf sdf sdf sdf sdfddsdfdsf fdrkdurk dk fj</Body>
      <Comments />
    </ViewPostWrap>
  );
};

export default ViewPost;
