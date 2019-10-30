import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Posts from "./../components/Posts/Posts";
import * as actions from "../store/actions";

PostsContainer.propTypes = {
  onFetchPosts: PropTypes.func,
  onCreatePost: PropTypes.func,
  onDeletePost: PropTypes.func,
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

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(actions.fetchPosts()),
    onCreatePost: newPost => dispatch(actions.createPost(newPost)),
    onDeletePost: id => dispatch(actions.deletePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
