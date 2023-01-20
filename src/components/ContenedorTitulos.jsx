import React from "react";
import { Registro } from "./Registro";
import "../style-sheets/contenedorTitulos.css"

export function ContenedorTitulos ({claves}){
    
    return(
            <>
                <div className= "contenedorTitulos">
                    {claves.map((item, index)=> <Registro value={item} key={index} isTitulo={true}/>)}
                </div>
            </>
    )
}