import React from 'react';
import "../App.css";
import images from "../images/index.js";

function sicakicecek() {
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
             <div className="card-header">Sıcak Süt</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Çilekli Süt</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Muzlu Süt</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Ballı Süt</div>
           </a>

         </div>

       </div>

         <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Tahinli Süt</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Sıcak Çikolata</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Sıcak Beyaz Çikolataa</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Sıcak Ruby Çikolata</div>
           </a>

         </div>

       </div>

        <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Salep</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Çikolatalı Salep</div>
           </a>

         </div>

       

       </div>


       

      

       </div>

   </div>
  )
}

export default sicakicecek