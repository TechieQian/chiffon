import React from "react";
import styles from "./App.module.scss";
import Header from "./header/Header";
import Body from "./body/Body";
import "bulma/css/bulma.css";
import Navigation from "./header/Navigation";
import { Switch, Route } from "react-router-dom";
import data from "./data/data";
import Shop from "./body/Shop";
import Collab from "./body/Collab";
import Grooming from "./body/Grooming"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Body>
            <div>{data.about}</div>
          </Body>
        </Route>
        <Route path="/about">
          <Body>
            <div>{data.about}</div>
          </Body>
        </Route>
        <Route path="/shop">
          <Body>
            <Shop />
          </Body>
        </Route>
        <Route path="/collaborate">
          <Body>
            <Collab />
          </Body>
        </Route>
        <Route path="/grooming">
          <Body>
            <Grooming />
          </Body>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
