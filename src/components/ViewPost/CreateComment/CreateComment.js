import React, { useState } from "react";
import {
  BodyComment,
  ButtonCreate,
  CreateCommentWrap
} from "./CreateComment.styles";

const CreateComment = ({ onCreateComment, id }) => {
  const [areaValue, serAreaValue] = useState("");

  const handleChange = e => {
    serAreaValue(e.target.value);
  };

  const handleClick = () => {
    const newComment = {
      id,
      body: areaValue
    };

    serAreaValue("");
    onCreateComment(newComment);
  };

  return (
    <CreateCommentWrap>
      <BodyComment
        value={areaValue}
        onChange={handleChange}
        placeholder="Add comment"
      ></BodyComment>
      <ButtonCreate disabled={!areaValue} onClick={handleClick}>
        Create comment
      </ButtonCreate>
    </CreateCommentWrap>
  );
};

export default CreateComment;
