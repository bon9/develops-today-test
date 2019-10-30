import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import PostDetail from "./../components/PostDetail/PostDetail";
import * as actions from "../store/actions";

ViewPostContainer.propTypes = {
  onFetchPostDetail: PropTypes.func.isRequired,
  onSaveEdit: PropTypes.func.isRequired,
  onCreateComment: PropTypes.func.isRequired,
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

const mapStateToProps = state => {
  return {
    post: state.posts.post,
    error: state.posts.error
  };
};

export default connect(
  mapStateToProps,
  {
    onFetchPostDetail: actions.fetchPostDetail,
    onSaveEdit: actions.saveEdit,
    onCreateComment: actions.createComment
  }
)(ViewPostContainer);
