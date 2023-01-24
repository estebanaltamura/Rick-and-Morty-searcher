import React, {useState, useEffect} from "react";
import "../style-sheets/Table.css"
import { ContenedorTitulos } from "./ContenedorTitulos";
import { Grilla } from "./Grilla";
import { Nav } from "./Nav";


export function Table({dataParaTabla, claves, paginaActual, SetPaginaActual}){



const [paginasTotales, setPaginasTotales] = useState(null)


useEffect(()=>{
    setPaginasTotales(Math.ceil(dataParaTabla.length/10)) 
})

 
const setPaginaIncremento = ()=>paginaActual < paginasTotales && SetPaginaActual(paginaActual+1) 
const setPaginaDecremento = ()=>paginaActual > 1 && SetPaginaActual(paginaActual-1) 



    return(
        <div className="tableElementsContainer" id="tableElementsContainer">
            <ContenedorTitulos claves={claves} /> 
            <div className="table" id="table">
                <Grilla dataParaTabla={dataParaTabla} paginaActual={paginaActual} paginasTotales={paginasTotales} claves={claves} />
            </div>
            <Nav paginaActual={paginaActual} setPaginaIncremento={setPaginaIncremento} setPaginaDecremento={setPaginaDecremento} />
        </div>
    )
}

