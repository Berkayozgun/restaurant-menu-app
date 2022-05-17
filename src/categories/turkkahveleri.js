import React from 'react';
import "../App.css";
import images from '../images';

function turkkahveleri() {
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
              <div className="card-header">Türk Kahvesi</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Aromalı Türk Kahvesi</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Damla Sakızlı Türk Kahvesi </div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Sütlü Türk Kahvesi</div>
            </a>

          </div>

        </div>

          <div className="order-card-row">

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Dibek Türk Kahvesi</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Sütlü Tahinli Türk Kahvesi</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Menengiç Türk Kahvesi</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Osmanlı Kahvesi</div>
            </a>

          </div>

        </div>

       

        

       

        </div>

    </div>
  )
}

export default turkkahveleri