import React from 'react';
import "../App.css";
import images from "../images/index.js";

function makarnalar() {
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
              <div className="card-header">Napoliten</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Arabiata</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Alfredo</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Bolognez</div>
            </a>

          </div>

        </div>

        <div className="order-card-row">

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Ton Balıklı ve Sebzeli</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Mantı</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Arabiata mantı</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Özel Special Soslu Mantı</div>
            </a>

          </div>

        </div>

      


        </div>

    </div>
  )
}

export default makarnalar