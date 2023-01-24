import React, {useState} from "react";
import { Registro } from "./Registro";
import "../style-sheets/ContenedorRegistros.css"



export function ContenedorRegistros({item, id, claves}){ 
    return(
    
        <div className="divFila" id={id}>
            <Registro value={item[claves[0]]} /> 
            <Registro value={item[claves[1]]} />
            <Registro value={item[claves[2]]} /> 
            <Registro value={item[claves[3]]} /> 
            
        </div> 

    )
}