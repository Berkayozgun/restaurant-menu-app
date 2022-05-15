import React from 'react';
import images from '../images/index.js';
import "../App.css"
import Bucket from './bucket.js';

function Header() {
  return (
    <div>

    <div className="main-header">
      
          <div className="header-logo">
            <img className="logo" src={images.logo} onClick={()=>window.location.href="/"} style={{cursor: 'pointer'}} alt="Logo" />
          </div>

          <div className="header-nav">
            
              
                <a className="nav-link" href="/">
                  <button>Ana sayfa</button>
                </a>
            
                <a className="nav-link" href="/aboutus">
                  <button>Hakkımızda</button>
                </a>
              
                <a className="nav-link" href="/contact">
                  <button>Bize Ulaşın</button>
                </a>
             
                <div className="bucket-h">
                <Bucket/>
                </div>
          </div>





    </div>



















    </div>
  )
}

export default Header;