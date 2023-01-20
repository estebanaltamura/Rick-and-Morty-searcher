import React from "react"; 
import { ContenedorRegistros } from "./ContenedorRegistros";
import "../style-sheets/Grilla.css"



export function Grilla({dataParaTabla, paginaActual, claves}){

const PintarDesde = paginaActual == 1 ? 0 : ((paginaActual-1)*10)
const ObjetosaPintar = dataParaTabla.slice(PintarDesde,(PintarDesde+10))  


return(
        <>
        
            {   
                ObjetosaPintar.map((item, index)=>(
                    <ContenedorRegistros key={index} id={`ContenedorRegistro${index}`} item={item} claves={claves}/>
                ))
            }
         
        </>
    )
}

