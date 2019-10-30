import React, { useState } from "react";
import PropTypes from "prop-types";

import Comments from "./Comments/Comments";
import useHandleChange from "../../hooks/useHandleChange";
import {
  ViewPostWrap,
  Author,
  CreateDate,
  Title,
  Body,
  Button,
  InputEditWrap,
  InputTitle,
  InputBody
} from "./PostDetail.styles";

PostDetail.propTypes = {
  post: PropTypes.object,
  onSaveEdit: PropTypes.func.isRequired,

  onCreateComment: PropTypes.func.isRequired
};
function PostDetail({ post, onSaveEdit, onCreateComment }) {
  const {
    creator = "Anybody",
    date = "Must be date",
    title,
    body,
    comments,
    id
  } = post;

  const [editing, setEditing] = useState(false);
  const [titlePost, bodyPost, setData] = useHandleChange(title, body);

  const handleClickEdit = () => {
    setEditing(true);
  };

  const handleClickSave = () => {
    setEditing(false);
    onSaveEdit({ titlePost, bodyPost, id, date, creator });
  };

  let summary = (
    <>
      <Title>
        <span>Title: </span>
        {title}
      </Title>
      <Body>{body}</Body>
    </>
  );

  if (editing) {
    summary = (
      <InputEditWrap>
        <InputTitle value={titlePost} onChange={e => setData(e, "title")} />
        <InputBody value={bodyPost} onChange={e => setData(e, "body")} />
      </InputEditWrap>
    );
  }

  return (
    <ViewPostWrap>
      <Author>{creator}</Author>
      <CreateDate>{date}</CreateDate>
      <Button disabled={editing} onClick={handleClickEdit}>
        Edit
      </Button>
      <Button disabled={!editing} onClick={handleClickSave}>
        Save
      </Button>
      {summary}
      <Comments comments={comments} onCreateComment={onCreateComment} id={id} />
    </ViewPostWrap>
  );
}

export default PostDetail;
