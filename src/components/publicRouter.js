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
import Kahvaltilik from "../categories/kahvaltilik";
import Kokteyl from "../categories/kokteyl";
import Makarnalar from "../categories/makarnalar";
import Mesrubatlar from "../categories/mesrubatlar";
import Salatalar from "../categories/salatalar";
import Sandvicler from "../categories/sandvicler";
import Sogukkahveler from "../categories/sogukkahve";
import Sicakicecekler from "../categories/sicakicecek";
import Tatlilar from "../categories/tatlilar";
import Turkkahveleri from "../categories/turkkahveleri";

function PublicRouter() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/aboutus">
          <Aboutus />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/anayemekler">
          <Anayemekler />
        </Route>

        <Route path="/atistirmalik">
          <Atistirmalik />
        </Route>

        <Route path="/burger">
          <Burger />
        </Route>

        <Route path="/caylar">
          <Caylar />
        </Route>

        <Route path="/espresso">
          <Espresso />
        </Route>

        <Route path="/filtrekahve">
          <Filtrekahve />
        </Route>

        <Route path="/kahvaltilik">
          <Kahvaltilik />
        </Route>

        <Route path="/kokteyl">
          <Kokteyl />
        </Route>

        <Route path="/makarnalar">
          <Makarnalar />
        </Route>

        <Route path="/mesrubatlar">
          <Mesrubatlar />
        </Route>

        <Route path="/salatalar">
          <Salatalar />
        </Route> 

        <Route path="/sandvicler">
          <Sandvicler />
        </Route>

        <Route path="/sogukkahveler">
          <Sogukkahveler />
        </Route>

        <Route path="/sicakicecekler">
          <Sicakicecekler />
        </Route>

        <Route path="/tatlilar">
          <Tatlilar />
        </Route>

        <Route path="/turkkahveleri">
          <Turkkahveleri />
        </Route>
        

        
      </Switch>
    </BrowserRouter>
  );
}

export default PublicRouter;
