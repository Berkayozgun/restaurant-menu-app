import React from 'react';
import "../App.css";
import images from "../images";

function mesrubatlar() {
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
             <div className="card-header">Karamel Milkshake</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Çikolata Milkshake</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Muz Milkshake</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Çilek Milkshake</div>
           </a>

         </div>

       </div>

         <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Böğürtlen Milkshake</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Su</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Cam Şişe Su</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Soda</div>
           </a>

         </div>

       </div>

       <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Meyveli Soda</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Kola</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Sprite</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Churchill</div>
           </a>

         </div>

       </div>

        <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Fanta</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Ice Tea</div>
           </a>

         </div>

        

       

       </div>


       

      

       </div>

   </div>
  )
}

export default mesrubatlar