import React from 'react';
import "../App.css";
import images from "../images";

function kokteyl() {
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
             <div className="card-header">Limonata</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Sıkma Portakal</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Banacoc</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Sunset</div>
           </a>

         </div>

       </div>

         <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Berry</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Soft Mojito</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Rengarenk</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Masmavi</div>
           </a>

         </div>

       </div>

       <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Limilim</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Tipitip</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Cindy</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeLuxKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Buz Kivi</div>
           </a>

         </div>

       </div>

        <div className="order-card-row">

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.kahvaltiTabagi} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Karadut</div>
           </a>
         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Sulugöz</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Buz Böğürtlen</div>
           </a>

         </div>

         <div className="order-card">
           <a href="/kahvaltilik" style={{textDecoration: 'none'}}>
             <div className="card-logo">
               <img className="category-pic" src={images.serpmeKahvalti} alt="Kahvalti Menu"/>
             </div>
             <div className="card-header">Buz Ananas</div>
           </a>

         </div>

       

       </div>


       

      

       </div>

   </div>
  )
}

export default kokteyl