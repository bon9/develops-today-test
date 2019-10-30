import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import * as actions from "./store/actions";
import Preloader from "./components/UI/Preloader/Preloader";

function App({ onFetchBlogs }) {
  // if (isAuth) {
  //   routes = (
  //     <Switch>
  //       <Route path="/" exact component={MainPage} />
  //       <Route path="/personal" component={Personal} />
  //       <Route path="/logout" component={Logout} />
  //       <Redirect to="/" />
  //     </Switch>
  //   );
  // }

  return (
    <div>
      <Preloader />
    </div>
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
