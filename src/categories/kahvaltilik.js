import React, {useState} from 'react';
import "../App.css";
import {kahvaltilik} from "../jsonfiles/dataset";
import Popup from '../components/popup';

function Kahvaltilik() {

  const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [Title,setTitle] = useState('');
    const [Image,setImage] = useState('');
    const [Price,setPrice] = useState('');
    const [About,setAbout] = useState('');

  return (
    <div>
     <div style={{marginLeft:'600px',marginTop:'10px'}}> Sipariş için kartların üzerine tıklayınız.</div>
      <div className="order-card-body">

        <div className="order-card-row">

          {kahvaltilik.map((post) => {
              return ( <div key={post.id} className="order-card" onClick={togglePopup}>
               <a 
              href="#"
              style={{textDecoration: 'none'}} 
              onClick={ 
                () => { setTitle(post.title) ;
                        setImage(post.image) ; 
                        setPrice(post.price) ; 
                        setAbout(post.about)}}>
                  <div className="card-logo">
                    <img className="category-pic" src={post.image} alt="images"/>
                  </div>
                  <div className="card-header">{post.title}</div>
                </a>

                {isOpen && <Popup
      content={<>
        <b className="popup-title">{Title}</b>
        <img className="popup-pic" src={Image} alt="images"></img>
        <p className="popup-about">{About}</p>
        <p className="popup-price">{Price} TL</p>
        
        <button className="popup-add">Sepete ekle</button>
      </>}
      handleClose={togglePopup}
    />}
        
              </div>
              
         ) })}

          
        </div>

      


        </div>

    </div>
  )
}

export default Kahvaltilik;