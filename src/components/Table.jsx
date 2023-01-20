import React, {useState, useEffect} from "react";
import "../style-sheets/Table.css"
import { ContenedorTitulos } from "./ContenedorTitulos";
import { Grilla } from "./Grilla";
import { Nav } from "./Nav";


export function Table({dataParaTabla, claves}){


const [paginaActual, SetPaginaActual] = useState(1)
const [paginasTotales, setpaginasTotales] = useState(null)

useEffect(()=>{
    setpaginasTotales(Math.ceil(dataParaTabla.length/10)) 
},[dataParaTabla])

    
const setPaginaIncremento = ()=>paginaActual < paginasTotales && SetPaginaActual(paginaActual+1) 
const setPaginaDecremento = ()=>paginaActual > 1 && SetPaginaActual(paginaActual-1)



    return(
        <div className="tableElementsContainer">
            <ContenedorTitulos claves={claves} /> 
            <div className="table">
                <Grilla dataParaTabla={dataParaTabla} paginaActual={paginaActual} claves={claves} />
            </div>
            <Nav paginaActual={paginaActual} setPaginaIncremento={setPaginaIncremento} setPaginaDecremento={setPaginaDecremento} />
        </div>
    )
}

