import React from 'react';
import "../App.css";
import images from "../images";

function sogukkahve() {
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
             <div className="card-header">Buzlu Filtre Kahve</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Buzlu Americano</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Buzlu Türk Kahvesi</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Buzlu Latte</div>
           </a>

         </div>

       </div>

         <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Buzlu Mocha</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Buzlu White Mocha</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Buzlu Machiato</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Frappe</div>
           </a>

         </div>

       </div>

        <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Frappucino</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Dondurmalı Frappucino</div>
           </a>

         </div>

       

       </div>


       

      

       </div>

   </div>
  )
}

export default sogukkahve