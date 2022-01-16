import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import  Home  from "./pages/HomePage.js";
import AvailableSeats  from "./components/AvailableSeat.js";
import LoginPage from "./pages/LoginPage.js";

/**
 * We use the react-router-dom library to simplify routing in our application.
 * We use BrowserRouter, Switch, and Route.
 *
 * BrowserRouter is the router implementation for HTML5 browsers (https://v5.reactrouter.com/web/api/BrowserRouter)
 * The Switch returns only the first machin route rather than all matching routes.
 * The Link is the replacement for anchor tags.
 *
 * We give reach route a target component.
 * So, in our example "/" will route to the "Home" component
 */

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/request" component={AvailableSeats} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};