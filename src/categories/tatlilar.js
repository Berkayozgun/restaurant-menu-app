import React, {useState} from 'react';
import "../App.css";
import {data} from "../jsonfiles/dataset.js";
import {Card, Modal, Button} from 'react-bootstrap';

function Tatlilar() {

  const [modalShow, setModalShow] = React.useState(false);

    const [Title,setTitle] = useState('');
    const [Imagex,setImage] = useState('');
    const [Price,setPrice] = useState('');
    const [About,setAbout] = useState('');

  return (
    <div>
     <div style={{marginLeft:'600px',marginTop:'10px'}}> Sipariş için kartların üzerine tıklayınız.</div>
      <div className="order-card-body">

        <div className="order-card-row">

          {data.tatlilar.map((post) => {
              return ( <div key={post.id} className="order-card" style={{}} onClick={() => setModalShow(true)}>
                <a 
                href="#"
            style={{textDecoration: 'none'}}
            onClick={ 
              () => { setTitle(post.title) ;
                      setImage(post.image) ; 
                      setPrice(post.price) ; 
                      setAbout(post.about)}} >

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

                <Card.Title className="card-title">{post.title}</Card.Title>

              </Card.Body>
            </Card>
            </a>

                {setModalShow && <div>
                  <Modal style={{borderRadius:"10%"}}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={() => setModalShow(false)}
      
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {Title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={Imagex}/>
        <p>{About}</p>
        <p>
          {Price} TL
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>}
        
              </div>
              
         ) })}

          
        </div>

      


        </div>

    </div>
  )
}

export default Tatlilar