import React from "react";
import styles from "./App.module.scss";
import Header from "./header/Header";
import Body from "./body/Body";
import "bulma/css/bulma.css";
import Navigation from "./header/Navigation";
import { Switch, Route } from "react-router-dom";
import data from "./data/data";
import Shop from "./body/Shop";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/about">
          <Body>
            <div>{data.about}</div>
          </Body>
        </Route>
        <Route path="/">
          <Body>
            <Shop />
          </Body>
        </Route>
        <Route path="/shop">
          <Body text={"This is home page"} />
        </Route>
        <Route path="/portfolio">
          <Body text={"This is home page"} />
        </Route>
        <Route path="/colaborate">
          <Body text={"This is home page"} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
