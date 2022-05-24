import React from "react";
import "../App.css";
import { data } from "../jsonfiles/dataset.js";
import { Card } from "react-bootstrap";

function Cards() {
  return (
    <div className="card-body">
      <div>
        <h1>Menü</h1>
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

              <Card.Body>

                <Card.Title className="card-title">{post.categoryName}</Card.Title>

              </Card.Body>
            </Card>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
