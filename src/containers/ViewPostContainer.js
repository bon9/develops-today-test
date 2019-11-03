import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import PostDetail from "./../components/PostDetail/PostDetail";
import * as actions from "../store/actions";

ViewPostContainer.propTypes = {
  post: PropTypes.object,
  error: PropTypes.bool,
  referrer: PropTypes.string,
  setReferrerDefault: PropTypes.func
};

function ViewPostContainer({ isFetching, referrer }) {
  let { postId } = useParams();
  const { post, error } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchPostDetail(postId));
  }, [dispatch, postId]);

  const onSaveEdit = useCallback(
    editedPost => dispatch(actions.saveEdit(editedPost)),
    [dispatch]
  );
  const onCreateComment = useCallback(
    newComment => dispatch(actions.createComment(newComment)),
    [dispatch]
  );

  if (error) {
    return <div>{error}</div>;
  }

  if (referrer) {
    return <Redirect to={referrer} />;
  }

  return (
    post && (
      <PostDetail
        post={post}
        onSaveEdit={onSaveEdit}
        onCreateComment={onCreateComment}
      />
    )
  );
}

export default ViewPostContainer;
