import React from "react";
import PropTypes from "prop-types";

import CreateComment from "./../CreateComment/CreateComment";
import { Comment, CommentsWrap } from "./Comments.styles";

Comments.propTypes = {
  comments: PropTypes.array,
  onCreateComment: PropTypes.func,
  id: PropTypes.number
};

function Comments({ comments, onCreateComment, id }) {
  const outputComments = comments.map(com => (
    <Comment key={com.id}>- {com.body}</Comment>
  ));

  return (
    <>
      <div>Comments:</div>
      <CommentsWrap>{outputComments}</CommentsWrap>
      <CreateComment onCreateComment={onCreateComment} id={id} />
    </>
  );
}

export default Comments;
