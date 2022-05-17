import React from 'react';
import "../App.css";
import images from '../images';

function tatlilar() {
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
              <div className="card-header">Sufle</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Dondurmalı Sufle</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Günlük Meyveli Cup</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Çikolatalı Krep</div>
            </a>

          </div>

        </div>

        <div className="order-card-row">

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Meyveli Krep</div>
            </a>
          </div>


        </div>

        

       

        </div>

    </div>
  )
}

export default tatlilar