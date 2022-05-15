import React from 'react';
import './App.css';
import PublicRouter from "./components/publicRouter";
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <Header/>
      <PublicRouter/>
    </div>
  );
}

export default App;
