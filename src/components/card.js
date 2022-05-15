import React from "react";
import "../App.css";
import images from "../images/index.js";

function Card() {
  return (
    <div className="card-body">
      <div className="card-row">

        <div className="card">
          <a href="/kahvaltilik">
            <div className="card-logo">
              <img
                className="category-pic"
                src={images.kahvaltiMenu}
                alt="Kahvalti Menu"
              />
            </div>
            <div className="card-header">Kahvaltılık</div>
          </a>
        </div>

        <div className="card">
          <a href="sandvicler">
            <div className="card-logo">
              <img
                className="category-pic"
                src={images.sandwichMenu}
                alt="Sandviç Menu"
              />
            </div>
            <div className="card-header">Sandviçler</div>
          </a>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.atistirmalikMenu}
              alt="Atistirmalik Menu"
            />
          </div>
          <div className="card-header">Atıştırmalık</div>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.makarnalarMenu}
              alt="Makarna Menu"
            />
          </div>
          <div className="card-header">Makarnalar</div>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.salatalarMenu}
              alt="Salatalar Menu"
            />
          </div>
          <div className="card-header">Salatalar</div>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.burgerMenu}
              alt="Burger Menu"
            />
          </div>
          <div className="card-header">Burger</div>
        </div>

        <div className="card">
          <a href="/anayemekler">
            <div className="card-logo">
              <img
                className="category-pic"
                src={images.anayemeklerMenu}
                alt="Ana Yemekler Menu"
              />
            </div>
            <div className="card-header">Ana Yemekler</div>
          </a>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.tatlilarMenu}
              alt="Tatlılar Menu"
            />
          </div>
          <div className="card-header">Tatlılar</div>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.caylarMenu}
              alt="Çaylar Menu"
            />
          </div>
          <div className="card-header">Çaylar</div>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.turkkahveleriMenu}
              alt="Turk Kahveleri Menu"
            />
          </div>
          <div className="card-header">Türk Kahveleri</div>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.espressoMenu}
              alt="Espresso Menu"
            />
          </div>
          <div className="card-header">Espresso ve Granül Kahveler</div>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.worldcoffeeMenu}
              alt="Filtre Kahve Menu"
            />
          </div>
          <div className="card-header">Filtre Kahve ve Dünya Kahveleri</div>
        </div>
      </div>

      <div className="card-row">
        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.sicakicecekMenu}
              alt="Sıcak İçecekler Menu"
            />
          </div>
          <div className="card-header">Sıcak Sütlü İçecekler</div>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.sogukkahvelerMenu}
              alt="Soğuk Kahveler Menu"
            />
          </div>
          <div className="card-header">Soğuk Kahveler</div>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.kokteylMenu}
              alt="Kokteyl Menu"
            />
          </div>
          <div className="card-header">Kokteyller</div>
        </div>

        <div className="card">
          <div className="card-logo">
            <img
              className="category-pic"
              src={images.mesrubatMenu}
              alt="Mesrubat Menu"
            />
          </div>
          <div className="card-header">Milkshake ve Meşrubatlar</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
