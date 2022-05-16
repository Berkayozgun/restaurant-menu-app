import React from "react";
import "../App.css";
import images from "../images/index.js";

function Card() {
  return (
    <div className="card-body">


      <div className="card-row">


        <div className="card">
          <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.kahvaltiMenu} alt="Kahvalti Menu"/>
            </div>
            <div className="card-header">Kahvaltılık</div>
          </a>
        </div>


        <div className="card">
          <a href="/sandvicler" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.sandwichMenu} alt="Sandviç Menu"/>
            </div>
            <div className="card-header">Sandviçler</div>
          </a>
        </div>


        <div className="card">
          <a href="/atistirmalik" style={{textDecoration: 'none'}}>
          <div className="card-logo">
            <img className="category-pic" src={images.atistirmalikMenu} alt="Atistirmalik Menu"/>
          </div>
          <div className="card-header">Atıştırmalık</div>
          </a>
        </div>


        <div className="card">
          <a href="/makarnalar" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.makarnalarMenu} alt="Makarna Menu" />
            </div>
            <div className="card-header">Makarnalar</div>
          </a>
        </div>

      </div>


      <div className="card-row">
        


        <div className="card">
          <a href="/salatalar" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.salatalarMenu} alt="Salatalar Menu" />
              </div>
            <div className="card-header">Salatalar</div>
          </a>
        </div>



        <div className="card">
          <a href="/burger" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.burgerMenu} alt="Burger Menu" />
            </div>
            <div className="card-header">Burger</div>
          </a>
        </div>

        <div className="card">
          <a href="/anayemekler" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.anayemeklerMenu} alt="Ana Yemekler Menu" />
            </div>
            <div className="card-header">Ana Yemekler</div>
          </a>
        </div>

        <div className="card">
          <a href="/tatlilar" style={{textDecoration: 'none'}}>
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.tatlilarMenu}
              alt="Tatlılar Menu"
            />
          </div>
          <div className="card-header">Tatlılar</div>
          </a>
        </div>


      </div>


      <div className="card-row">


        <div className="card">
          <a href="/caylar" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.caylarMenu} alt="Çaylar Menu" />
            </div>
            <div className="card-header">Çaylar</div>
          </a>
        </div>


        <div className="card">
          <a href="/turkkahveleri" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.turkkahveleriMenu} alt="Turk Kahveleri Menu"/>
            </div>
            <div className="card-header">Türk Kahveleri</div>
          </a>
        </div>


        <div className="card">
          <a href="/espresso" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.espressoMenu} alt="Espresso Menu" />
            </div>
            <div className="card-header">Espresso ve Granül Kahveler</div>
          </a>
        </div>


        <div className="card">
          <a href="/filtrekahve" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.worldcoffeeMenu} alt="Filtre Kahve Menu"  />
            </div>
            <div className="card-header">Filtre Kahve ve Dünya Kahveleri</div>
          </a>
        </div>


      </div>


      <div className="card-row">


        <div className="card">
          <a href="/sicakicecek" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.sicakicecekMenu} alt="Sıcak İçecekler Menu"/>
            </div>
            <div className="card-header">Sıcak Sütlü İçecekler</div>
          </a>
        </div>


        <div className="card">
          <a href="/sogukkahve" style={{textDecoration: 'none'}}>
            <div className="card-logo">
             <img className="category-pic" src={images.sogukkahvelerMenu} alt="Soğuk Kahveler Menu"/>
            </div>
            <div className="card-header">Soğuk Kahveler</div>
          </a>
        </div>


        <div className="card">
          <a href="/kokteyl" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.kokteylMenu} alt="Kokteyl Menu"/>
            </div>
            <div className="card-header">Kokteyller</div>
          </a>
        </div>


        <div className="card">
          <a href="/mesrubatlar" style={{textDecoration: 'none'}}>
            <div className="card-logo">
              <img className="category-pic" src={images.mesrubatMenu} alt="Mesrubat Menu"/>
            </div>
            <div className="card-header">Milkshake ve Meşrubatlar</div>
          </a>
        </div>
        
      </div>


    </div>
  );
}

export default Card;
