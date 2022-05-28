import React, { useState } from "react";
import "../App.css";
import { data } from "../jsonfiles/dataset";
import { Card, Modal, Button } from "react-bootstrap";

function Anayemekler() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Title, setTitle] = useState("");
  const [Imagex, setImage] = useState("");
  const [Price, setPrice] = useState("");
  const [About, setAbout] = useState("");

  return (
    <div>
      <div style={{ marginLeft: "600px", marginTop: "10px" }}>
        {" "}
        Sipariş için kartların üzerine tıklayınız.
      </div>
      <div className="order-card-body">
        <div className="order-card-row">
          {data.anayemekler.map((post) => {
            return (
              <div
                key={post.id}
                className="order-card"
                style={{}}
              >
                
                  <Card className="order-card" style={{ borderRadius: "20%" }}>
                    <Card.Img
                      style={{ borderRadius: "20%" }}
                      className="card-img"
                      variant="top"
                      src={post.image}
                      alt="Card image cap"
                    />

                    <Card.Body>
                      <Card.Title className="card-title">
                        {post.title}
                      </Card.Title>
                    <Button onClick={() => {
                    setTitle(post.title);
                    setImage(post.image);
                    setPrice(post.price);
                    setAbout(post.about);
                    setShow(true);
                  }} className="detay-button">Detay</Button>
                    <Button onClick={() => {
                              setShow(false);
                              alert('Sepete Eklendi!')}}
                              className="sepete-ekle-button">Sepete Ekle</Button>
                    </Card.Body>
                   
                  </Card>
                
                
                {setShow && (
                  <div>
                    <Modal
                      style={{ borderRadius: "10%" }}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={show}
                      onHide={() => setShow(false)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                          {Title}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <img className="modal-img" src={Imagex} />
                        <p>{About}</p>
                        <p>{Price} TL</p>
                      </Modal.Body>
                      <Modal.Footer>
                         <Button onClick={() => {
                              setShow(false);
                              alert('Sepete Eklendi!')}}>
                          Sepete Ekle
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Anayemekler;
