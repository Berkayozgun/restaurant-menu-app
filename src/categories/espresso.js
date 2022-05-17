import React from 'react';
import "../App.css";
import images from "../images/index.js";

function espresso() {
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
             <div className="card-header">Sade Granül Kahve</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Sütlü Granül Kahve</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Cappucino</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Single Espresso</div>
           </a>

         </div>

       </div>

         <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Duble Espresso</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Espresso Macchiato</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Espresso Conpana</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Americano</div>
           </a>

         </div>

       </div>

        <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Latte</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Flat White</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Mocha</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">White Mocha</div>
           </a>

         </div>

       </div>

       <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Caramel Macchiato</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Coffee Miel</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Chai Tea Latte</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Irish Cream Latte</div>
           </a>

         </div>

       </div>

       

      

       </div>

   </div>
  )
}

export default espresso