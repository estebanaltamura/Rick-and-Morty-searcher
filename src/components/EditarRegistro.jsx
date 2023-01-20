import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "../style-sheets/EditarRegistros.css"


export function EditarRegistro({className}){


    return(
        <div className={className} >
            <BsThreeDotsVertical className="icono"/>
        </div>
        
    )
}