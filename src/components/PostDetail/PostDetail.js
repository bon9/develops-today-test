import React, { useState } from "react";
import PropTypes from "prop-types";

import Comments from "./Comments/Comments";
import {
  ViewPostWrap,
  Author,
  CreateDate,
  Title,
  Body,
  ButtonEdit,
  ButtonSave,
  InputEditWrap,
  InputTitle,
  InputBody
} from "./PostDetail.styles";

PostDetail.propTypes = {
  post: PropTypes.object,
  onSaveEdit: PropTypes.func,
  onCreateComment: PropTypes.func
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
  const [titleEdit, setTitleEdit] = useState(title);
  const [bodyEdit, setBodyEdit] = useState(body);

  const handleClickEdit = () => {
    setEditing(true);
  };

  const handleClickSave = () => {
    setEditing(false);
    onSaveEdit({ titleEdit, bodyEdit, id, date, creator });
  };

  const handleChange = (e, type) => {
    if (type === "title") {
      setTitleEdit(e.target.value);
    }
    if (type === "body") {
      setBodyEdit(e.target.value);
    }
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
        <InputTitle
          value={titleEdit}
          onChange={e => handleChange(e, "title")}
        />
        <InputBody value={bodyEdit} onChange={e => handleChange(e, "body")} />
      </InputEditWrap>
    );
  }

  return (
    <ViewPostWrap>
      <Author>{creator}</Author>
      <CreateDate>{date}</CreateDate>
      <ButtonEdit disabled={editing} onClick={handleClickEdit}>
        Edit post
      </ButtonEdit>
      <ButtonSave disabled={!editing} onClick={handleClickSave}>
        Save Post
      </ButtonSave>
      {summary}
      <Comments comments={comments} onCreateComment={onCreateComment} id={id} />
    </ViewPostWrap>
  );
}

export default PostDetail;
