import React, {useState, useEffect}from 'react';
import './App.css';
import { Table } from './components/Table';
import { CharacterViewer } from './components/CharacterViewer';


function App() {

const [dataParaTabla, setDataParaTabla] = useState([])
const [claves, setClaves] = useState([]) 
const [dataParaCard, setDataDataParaCard] = useState([])



useEffect(()=>{

  const argumentosParaFetch = [] 

  for (let i = 1; i < 827;i++){
    argumentosParaFetch.push(i)
  }

  fetch(`https://rickandmortyapi.com/api/character/${argumentosParaFetch.join()}`)      
      .then(res=>res.json())
      .then(res=>functionProxy(res)) 
      .catch((e)=>console.log(e)) 

  const functionProxy = (res)=>{
    dataParaTablaFilter(res)
    dataParaCardFilter(res)
  }

  const dataParaTablaFilter = (res)=>{ 
      setStatesParaTabla(
          res.map((item)=>{
              return {name:item.name, species:item.species, status:item.status, gender:item.gender}
          })
      )    
  }

  const dataParaCardFilter = (res)=>{ 
    setStatesParaCard(
        res.map((item1)=>{
            return {image:item1.image, gender:item1.gender, location:item1["location"].name}  
        })
    )    
}
  
  
  const setStatesParaTabla = (arrayDeObjetos)=>{ 
      setDataParaTabla(arrayDeObjetos)
      setClaves(Object.keys(arrayDeObjetos[0]))   
  }

  const setStatesParaCard = (arrayDeObjetos)=>{
    setDataDataParaCard(arrayDeObjetos) 
  } 

}, []) 

   
  return (
    
    <div className="App">
      <Table dataParaTabla={dataParaTabla} claves={claves} />    
      <CharacterViewer dataParaCard={dataParaCard}/>     
    </div>

  );
 
}
export default App;

