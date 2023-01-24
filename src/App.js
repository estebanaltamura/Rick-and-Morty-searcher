import React, {useState, useEffect}from 'react';
import './App.css';
import { SortandFilter } from './components/SortandFilter';
import { Table } from './components/Table';
import { CharacterViewer } from './components/CharacterViewer';


function App() {

const [dataParaTabla, setDataParaTabla] = useState([])
const [dataParaCard, setDataParaCard] = useState([])
const [claves, setClaves] = useState([]) 
const [selectedCharacterId, setSelectedCharacterId] = useState(0)
const [paginaActual, SetPaginaActual] = useState(1)



const setCharacterIdSelected = (e)=>{
  if (e.target.nodeName=="SPAN" && e.target.parentNode.id.slice(0,18) == "ContenedorRegistro"){
    const calculoIdCaracter = paginaActual == 1 ? 0 : ((paginaActual - 1) * 10)
    setSelectedCharacterId(Number(e.target.parentNode.id[18]) + calculoIdCaracter)
  }
  else if (e.target.nodeName=="DIV" && e.target.parentNode.id == "table"){ 
    const calculoIdCaracter = paginaActual == 1 ? 0 : ((paginaActual - 1) * 10)
    setSelectedCharacterId(Number(e.target.id[18])  + calculoIdCaracter)
  }
}  

useEffect(()=>{
  const argumentosParaFetch = [] 
  for (let i = 1; i < 827;i++){
    argumentosParaFetch.push(i)
  }
  
  //https://harry-potter-api.onrender.com/db
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
    setDataParaCard(arrayDeObjetos) 
  } 

}, []) 

    
  return (
    
    <div className="App" onClick={setCharacterIdSelected}>
      <SortandFilter />
      <Table dataParaTabla={dataParaTabla} claves={claves} paginaActual={paginaActual} SetPaginaActual={SetPaginaActual} />    
      <CharacterViewer dataParaCard={dataParaCard} selectedCharacterId={selectedCharacterId} />     
    </div>

  );
 
}
export default App;

