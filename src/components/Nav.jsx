import React from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { HiChevronDoubleRight } from "react-icons/hi";
import "../style-sheets/Nav.css"

export function Nav({paginaActual, setPaginaDecremento, setPaginaIncremento}){
    return(
        <div className="contendorNav">
            <div 
                className="contenedorIcono1"
                onClick={setPaginaDecremento}
                   ><HiChevronDoubleLeft className="icon1" />
            </div>

            <span className="paginaActual">{paginaActual}</span>

            <div 
                className="contenedorIcono2"
                onClick={setPaginaIncremento}      
                    ><HiChevronDoubleRight className="icon2" />
            </div>
            
           
        </div>
    )
}