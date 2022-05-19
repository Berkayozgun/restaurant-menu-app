import React from "react";
import "../App.css";
import Data from "../jsonfiles/menu";

function Card() {
  return (
    <div className="card-body">

      <div>
        <h1>Menü</h1>
      </div>
      <div className="card-row">

        {Data.map((post) => { return ( 
        
            <div className="card">
              <a href={post.address} style={{textDecoration: 'none'}}>
                <div className="card-logo">
                  <img className="category-pic" src={post.image} alt="images"/>
                </div>
                <div className="card-header">{post.categoryName}</div>
              </a>
            </div>)
        
        })}
       

        </div>
    </div>
  );
}

export default Card;
