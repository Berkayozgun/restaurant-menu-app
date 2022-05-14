import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../App.js';
import Aboutus from '../pages/aboutus.js';
import Contact from '../pages/contact.js'

import Anayemekler from "../categories/anayemekler";
import Atistirmalik from "../categories/atistirmalik";
import Burger from "../categories/burger";
import Caylar from "../categories/caylar";
import Espresso from "../categories/espresso";
import Filtrekahve from "../categories/filtrekahve";
import Kahvaltilik from "../categories/kahvaltilik.js";
import Kokteyl from "../categories/kokteyl";
import Makarnalar from  "../categories/makarnalar";
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
        
      <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contact" element={<Contact />} />
        <Route path="anayemekler" element={<Anayemekler />} />
        <Route path="atistirmalik" element={<Atistirmalik />} />
        <Route path="burger" element={<Burger />} />
        <Route path="caylar" element={<Caylar />} />
        <Route path="espresso" element={<Espresso />} />
        <Route path="filtrekahve" element={<Filtrekahve />} />
        <Route path="kahvaltilik" element={<Kahvaltilik />} />
        <Route path="kokteyl" element={<Kokteyl />} />
        <Route path="makarnalar" element={<Makarnalar />} />
        <Route path="mesrubatlar" element={<Mesrubatlar />} />
        <Route path="salatalar" element={<Salatalar />} />
        <Route path="sandvicler" element={<Sandvicler />} />
        <Route path="sogukkahveler" element={<Sogukkahveler />} />
        <Route path="sicakicecek" element={<Sicakicecekler />} />
        <Route path="tatlilar" element={<Tatlilar />} />
        <Route path="turkkahveleri" element={<Turkkahveleri />} />
        </Switch>
       
    </BrowserRouter>
  );
}

export default Router;