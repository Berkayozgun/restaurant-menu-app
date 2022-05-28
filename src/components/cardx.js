import React from "react";
import "../App.css";
import { data } from "../jsonfiles/dataset.js";
import { Card } from "react-bootstrap";

function Cardx() {
  return (
    <div>
      <div>
        <h1 className="card-header">Menü</h1>
      </div>
      <div className="card-row">
        {data.menu.map((post) => {
          return (

            <a 
            href={post.address}
            style={{textDecoration: 'none'}}  >

            <Card className="card"
            style={{borderRadius:"20%"}}>

              <Card.Img
                style={{borderRadius:"20%"}}
                className="card-img"
                variant="top"
                src={post.image}
                alt="Card image cap"
              />

              <div className="card-bodyx">

                <div className="cardx-title">{post.categoryName}</div>

              </div>
            </Card>
            </a>
          );
        })}
      </div>
      </div>
  );
}

export default Cardx;
