import React, { useEffect } from "react";
import { connect } from "react-redux";

import Posts from "./../components/Posts/Posts";
import * as actions from "../store/actions";
import Preloader from "./../components/UI/Preloader/Preloader";

const PostsContainer = ({
  onFetchPosts,
  onCreatePost,
  onDeletePost,
  posts,
  isFetching,
  error
}) => {
  useEffect(() => {
    onFetchPosts();
  }, [onFetchPosts]);
  if (isFetching) {
    return <Preloader />;
  }

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
};

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    isFetching: state.posts.isFetching,
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
