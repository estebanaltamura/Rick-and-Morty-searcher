import React from "react";  
import "../style-sheets/Registro.css"

export function Registro({value, isTitulo}){

const class1 = isTitulo==true ? "titulo" : "dato" 

return(
        <span 
            className={class1} 
                >{value}
        </span>
    )
}