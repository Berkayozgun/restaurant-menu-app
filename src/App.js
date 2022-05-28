import React, {useState} from 'react';
import './App.css';
import PublicRouter from "./components/publicRouter";
import Header from './components/header';
import Bucket from './components/bucket';
import {data} from './jsonfiles/dataset.js';

function App() {

  const{anayemek} = data;
  const[cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(
        cartItems.map((x) =>
         x.id === product.id ? {...exist, qty: exist.qty +1} : x
        )
      );
    }
    else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
      
    };
    
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if(exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      }
      else{
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? {...exist, qty: exist.qty -1} : x
          )
        );
      
      }
      };

  return (
    <div >
      <Header/>
      <PublicRouter/>
      <div >
      <Bucket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
      </div>
      
    </div>
  );
}

export default App;
