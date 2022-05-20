import React from 'react';
import "../App.css";
import Data from '../jsonfiles/makarnalar.json';

function makarnalar() {
  return (
    <div>
     <div style={{marginLeft:'600px',marginTop:'10px'}}> Sipariş için kartların üzerine tıklayınız.</div>
      <div className="order-card-body">

        <div className="order-card-row">

        {Data.map((post) => { 
            return <div key={post.id} className="order-card">
            <a href="/makarnalar" style={{textDecoration: 'none'}}>
              <div className="card-logo">
                <img className="category-pic" src={post.image} alt="images"/>
              </div>
              <div className="card-header">{post.title}</div>
            </a>
            </div>
        })}

        </div>

      


        </div>

    </div>
  )
}

export default makarnalar