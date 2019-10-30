import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";

import ViewPost from "./../components/ViewPost/ViewPost";
import * as actions from "../store/actions";
import Preloader from "./../components/UI/Preloader/Preloader";

const ViewPostContainer = ({
  onFetchPostDetail,
  onSaveEdit,
  onCreateComment,
  post,
  isFetching,
  error,
  referrer
}) => {
  let { postId } = useParams();

  useEffect(() => {
    onFetchPostDetail(postId);
  }, [onFetchPostDetail, postId]);
  if (isFetching) {
    return <Preloader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  let summary = post && (
    <ViewPost
      post={post}
      onSaveEdit={onSaveEdit}
      onCreateComment={onCreateComment}
    />
  );
  if (referrer) {
    summary = <Redirect to={referrer} />;
  }
  return summary;
};

const mapStateToProps = state => {
  return {
    post: state.posts.post,
    isFetching: state.posts.isFetchingPostDetail,
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
