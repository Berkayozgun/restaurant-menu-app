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
            
              
                <a className="nav-link" href="/">AnaSayfa</a>
            
                <a className="nav-link" onClick={()=>window.open("/aboutus","_blank")} style={{cursor:"pointer"}}>Hakkımızda</a>
              
                <a className="nav-link" href="/contact">Bize Ulaşın</a>
             
                <div className="bucket-h">
                <Bucket/>
                </div>
          </div>





    </div>



















    </div>
  )
}

export default Header;