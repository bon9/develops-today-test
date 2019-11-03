import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Posts from "./../components/Posts/Posts";
import * as actions from "../store/actions";

PostsContainer.propTypes = {
  posts: PropTypes.bool,
  error: PropTypes.bool,
  setReferrerDefault: PropTypes.func
};

function PostsContainer({ setReferrerDefault }) {
  const dispatch = useDispatch();
  const { posts, error } = useSelector(state => state.posts);
  useEffect(() => {
    setReferrerDefault();
    dispatch(actions.fetchPosts());
  }, [dispatch, setReferrerDefault]);

  const onCreatePost = useCallback(
    newPost => dispatch(actions.createPost(newPost)),
    [dispatch]
  );

  const onDeletePost = useCallback(id => dispatch(actions.deletePost(id)), [
    dispatch
  ]);

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

export default PostsContainer;
