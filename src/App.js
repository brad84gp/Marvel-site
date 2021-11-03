import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import Characters from "./Characters/Characters";
import IndividualCharacter from "./IndividualCharacter/IndividualCharacter";
import ComicPopUp from "./IndividualCharacter/Comics/ComicPopUp";
import SeriesInfo from "./IndividualCharacter/Series/SeriesInfo";
import ErrorPage from "./Error/ErrorPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/characters'>
            <Characters />
          </Route>

          <Route exact path='/characters/:id'>
            <IndividualCharacter />
          </Route>

          <Route exact path="/ComicPopUP">
            <ComicPopUp />
          </Route>

          <Route exact path="/SeriesPopUp">
            <SeriesInfo />
          </Route>

          {/* <Route exact path="/404">
            <ErrorPage />
          </Route> */}

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
