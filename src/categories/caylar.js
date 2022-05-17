import React from 'react';
import images from '../images';
import "../App.css";

function caylar() {
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
              <div className="card-header">Bardak Çay</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Fincan Çay</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Kuşburnu Çayı</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Ada Çayı</div>
            </a>

          </div>

        </div>

        <div className="order-card-row">

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Ihlamur Çayı</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Papatya Çayı</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Kış Çayı</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Yeşil Çay</div>
            </a>

          </div>

        </div>


        <div className="order-card-row">

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Nane Limon Çayı</div>
            </a>
          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Tropikal Çay</div>
            </a>

          </div>

          <div className="order-card">
            <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
              </div>
              <div className="card-header">Atom Çayı</div>
            </a>

          </div>

        

        </div>

        

       

        </div>

    </div>
  )
}

export default caylar