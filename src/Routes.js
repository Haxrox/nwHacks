import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Home  from "./pages/HomePage.js";
import AvailableSeats  from "./components/AvailableSeat.js";
import LoginPage from "./pages/LoginPage.js";
import LeavePage from "./pages/LeavePage.js";
import SeatRequestPage from "./pages/SeatRequestPage.js";
import WaitPage from "./pages/WaitPage.js";
import ConfirmCancelSeatTransferPage from './pages/ConfirmCancelSeatTransferPage'
import MatchPage from "./pages/MatchPage.js";

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
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/request" component={SeatRequestPage} />
        <Route exact path="/respond" component={LeavePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/wait" component={WaitPage} />
        <Route exact path="/confirm" component={ConfirmCancelSeatTransferPage} />
        <Route exact path="/match" component={MatchPage}/>
      </Switch>
    </BrowserRouter>
  );
};