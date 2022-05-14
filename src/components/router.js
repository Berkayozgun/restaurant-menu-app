import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/home";
import Aboutus from "../pages/aboutus";
import Contact from "../pages/contact";

import Anayemekler from "../categories/anayemekler";
import Atistirmalik from "../categories/atistirmalik";
import Burger from "../categories/burger";
import Caylar from "../categories/caylar";
import Espresso from "../categories/espresso";
import Filtrekahve from "../categories/filtrekahve";
import Kahvaltilik from "../categories/kahvaltilik.js";
import Kokteyl from "../categories/kokteyl";
import Makarnalar from "../categories/makarnalar";
import Mesrubatlar from "../categories/mesrubatlar";
import Salatalar from "../categories/salatalar";
import Sandvicler from "../categories/sandvicler";
import Sogukkahveler from "../categories/sogukkahve";
import Sicakicecekler from "../categories/sicakicecek";
import Tatlilar from "../categories/tatlilar";
import Turkkahveleri from "../categories/turkkahveleri";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/kahvaltilik">
          <Kahvaltilik />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
