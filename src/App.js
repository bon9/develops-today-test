import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions";
import PostsContainer from "./containers/PostsContainer";
import ViewPostContainer from "./containers/ViewPostContainer";
import { AppWrap, HeaderWrap, HeaderTitle, BodyWrap } from "./App.styles";

function App({ onFetchBlogs }) {
  const routes = (
    <Switch>
      <Route path="/posts" exact component={PostsContainer} />
      <Route path="/posts/:postId" component={ViewPostContainer} />
      <Redirect to="/posts" />
    </Switch>
  );

  return (
    <AppWrap>
      <HeaderWrap>
        <HeaderTitle>Develops Today</HeaderTitle>
      </HeaderWrap>
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
