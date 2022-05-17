import React from 'react';
import "../App.css";
import images from "../images/index.js";


function Sandvicler() {
  return (
    <div>
     <div style={{marginLeft:'600px',marginTop:'10px'}}> Sipariş için kartların üzerine tıklayınız.</div>
     <div className="order-card-body">

        <div className="order-card-row">

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Kahvaltı Sandviç</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Karışık Sandviç</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Kavurmalı Sandviç</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Tavuklu Sandviç</div>
            </a>

          </div>

        </div>

         <div className="order-card-row">

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Ton Balıklı Sandviç</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Köfte Sandviç</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Patso</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Sosisli Patso</div>
            </a>

          </div>

        </div>

         <div className="order-card-row">

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Sosisli Sandviç</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Kumru</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Tavuklu Sandviç</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Tavuklu Mexica Sandviç</div>
            </a>

          </div>

        </div>

        <div className="order-card-row">

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Tavuklu Barbekü Sandviç</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Tavuklu Soya Sandviç</div>
            </a>
          </div>

        </div>

        </div>

    </div>
  )
}

export default Sandvicler;