
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Person from "../PD1/name.js";
import Parent from "../PD2/parent.js";
import ParentNew from "../PD3/parentNew.js";
import LifecycleTest from "../PD4/LifecycleTest.js";


export default function HomeworkRouting() {
  return (
    <Router>
      <div>
        
        <ul>
          <li>
            <Link to="/PD1/name">PD1</Link>
          </li>
          <li>
            <Link to="/PD2/parent">PD2</Link>
          </li>
          <li>
            <Link to="/PD3/parentNew">PD3</Link>
          </li>
          <li>
            <Link to="/PD4/LifecycleTest">PD4</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/PD1/name">
            <Person />
          </Route>
          <Route path="/PD2/parent">
            <Parent />
          </Route>
          <Route path="/PD3/parentNew">
            <ParentNew />
          </Route>
          <Route path="/PD4/LifecycleTest">
            <LifecycleTest />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}