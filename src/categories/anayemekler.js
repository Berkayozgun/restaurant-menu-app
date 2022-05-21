import React, {useState} from 'react';
import "../App.css";
import {anayemekler} from '../jsonfiles/dataset';
import Popup from '../components/popup';

function Anayemekler() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
     <div style={{marginLeft:'600px',marginTop:'10px'}}> Sipariş için kartların üzerine tıklayınız.</div>
      <div className="order-card-body">

        <div className="order-card-row">

        {anayemekler.map((post) => { 
            return <div key={post.id} className="order-card" onClick={togglePopup}>
            <a href="#" style={{textDecoration: 'none', cursor: 'pointer'}}>
              <div className="card-logo">
                <img className="category-pic" src={post.image} alt="images"/>
              </div>
              <div className="card-header">{post.title}</div>
            </a>
            {isOpen && <Popup
      content={<>
        <b>{post.title}</b>
        <p>{post.about}</p>
        <p>{post.price}</p>
        <button>Sepete ekle</button>
      </>}
      handleClose={togglePopup}
    />}
        
            </div>
            
        })}
         
        </div>


      

        </div>

    </div>
  )
}

export default Anayemekler;