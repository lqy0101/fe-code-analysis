import React from "react";
import {
  HashRouter as Router,
  Route,
  Link
} from "../router-demo/react-router-dom";
import About from '../pages/About'
import Home from '../pages/Home'
import Users from '../pages/Users'
const RouterProvider=()=>{
    return  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>


      {/* <Switch> */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      {/* </Switch> */}
    </div>
  </Router>
}
export default RouterProvider;