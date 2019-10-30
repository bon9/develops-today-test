import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PostsContainer from "./containers/PostsContainer";
import ViewPostContainer from "./containers/ViewPostContainer";
import { AppWrap, BodyWrap } from "./App.styles";
import Header from "./components/Header/Header";

function App() {
  const [referrer, setReferrer] = useState(null);

  const setReferrerDefault = () => {
    setReferrer(null);
  };

  const handleClickBack = () => {
    setReferrer("/posts");
  };

  const routes = (
    <Switch>
      <Route path="/posts" exact>
        <PostsContainer setReferrerDefault={setReferrerDefault} />
      </Route>
      <Route path="/posts/:postId" exact>
        <ViewPostContainer referrer={referrer} />
      </Route>
      <Redirect to="/posts" />
    </Switch>
  );

  return (
    <AppWrap>
      <Header handleClickBack={handleClickBack} />
      <BodyWrap>{routes}</BodyWrap>
    </AppWrap>
  );
}

export default App;
