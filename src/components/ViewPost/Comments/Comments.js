import React from "react";
import CreateComment from "./../CreateComment/CreateComment";
import { Comment, CommentsWrap } from "./Comments.styles";

const Comments = () => {
  return (
    <>
      <div>Comments:</div>
      <CommentsWrap>
        <Comment>Comments</Comment>
        <Comment>Comments 5 </Comment>
        <Comment>Comments 6 56</Comment>
        <Comment>Comments 45645645 </Comment>
      </CommentsWrap>
      <CreateComment />
    </>
  );
};

export default Comments;
