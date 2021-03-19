import  React from "react"
import './App.css';
import Contato from "../src/components/Contato.js"
import Rodape from "../src/components/Rodape.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../src/components/Header.js"
import Quemsomos from "../src/components/Quemsomos.js"
import Seguradoras from "../src/components/Seguradoras.js"
import Servicosa from '../src/components/Servicosa.js';



export default function App() {
  return (
    <div classname="app">
      <Header/>
      <Quemsomos/>
      <Seguradoras/>
      <Servicosa/>
      <Contato/>
      <Rodape/>
    </div>
 
  );
}


