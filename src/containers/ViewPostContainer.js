import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import PostDetail from "./../components/PostDetail/PostDetail";
import * as actions from "../store/actions";

ViewPostContainer.propTypes = {
  onFetchPostDetail: PropTypes.func,
  onSaveEdit: PropTypes.func,
  onCreateComment: PropTypes.func,
  post: PropTypes.object,
  error: PropTypes.bool,
  referrer: PropTypes.string,
  setReferrerDefault: PropTypes.func
};

function ViewPostContainer({
  onFetchPostDetail,
  onSaveEdit,
  onCreateComment,
  post,
  isFetching,
  error,
  referrer
}) {
  let { postId } = useParams();

  useEffect(() => {
    onFetchPostDetail(postId);
  }, [onFetchPostDetail, postId]);

  if (error) {
    return <div>{error}</div>;
  }

  let summary = post && (
    <PostDetail
      post={post}
      onSaveEdit={onSaveEdit}
      onCreateComment={onCreateComment}
    />
  );
  if (referrer) {
    summary = <Redirect to={referrer} />;
  }
  return summary;
}

const mapStateToProps = state => {
  return {
    post: state.posts.post,
    error: state.posts.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPostDetail: id => dispatch(actions.fetchPostDetail(id)),
    onSaveEdit: editedPost => dispatch(actions.saveEdit(editedPost)),
    onCreateComment: newComment => dispatch(actions.createComment(newComment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPostContainer);
