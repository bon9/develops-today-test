import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Posts from "./../components/Posts/Posts";
import * as actions from "../store/actions";

PostsContainer.propTypes = {
  onFetchPosts: PropTypes.func.isRequired,
  onCreatePost: PropTypes.func.isRequired,
  onDeletePost: PropTypes.func.isRequired,
  posts: PropTypes.array,
  error: PropTypes.bool,
  setReferrerDefault: PropTypes.func
};

function PostsContainer({
  onFetchPosts,
  onCreatePost,
  onDeletePost,
  posts,
  error,
  setReferrerDefault
}) {
  useEffect(() => {
    setReferrerDefault();
    onFetchPosts();
  }, [onFetchPosts, setReferrerDefault]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    posts && (
      <Posts
        posts={posts}
        onCreatePost={onCreatePost}
        onDeletePost={onDeletePost}
      />
    )
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    error: state.posts.error
  };
};

export default connect(
  mapStateToProps,
  {
    onFetchPosts: actions.fetchPosts,
    onCreatePost: actions.createPost,
    onDeletePost: actions.deletePost
  }
)(PostsContainer);
