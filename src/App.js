import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions";
import PostsContainer from "./containers/PostsContainer";
import ViewPostContainer from "./containers/ViewPostContainer";
import { AppWrap, BodyWrap } from "./App.styles";
import Header from "./components/Header/Header";

function App({ onFetchBlogs }) {
  const [referrer, setReferrer] = useState(null);

  const routes = (
    <Switch>
      <Route path="/posts" exact>
        <PostsContainer />
      </Route>
      <Route path="/posts/:postId" exact>
        <ViewPostContainer referrer={referrer} />
      </Route>
      <Redirect to="/posts" />
    </Switch>
  );

  const handleClickBack = () => {
    setReferrer("/posts");
  };

  return (
    <AppWrap>
      <Header handleClickBack={handleClickBack} />
      <BodyWrap>{routes}</BodyWrap>
    </AppWrap>
  );
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onFetchBlogs: () => dispatch(actions.fetchBlogs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
