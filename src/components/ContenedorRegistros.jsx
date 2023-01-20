import React, {useState} from "react";
import { Registro } from "./Registro";
import "../style-sheets/ContenedorRegistros.css"



export function ContenedorRegistros({item, id, claves}){ 


//
const [isHover, setisHover] = useState(["divFila", "iconHidden"])

const onMouseOver = ()=> {
    return (setisHover(["divFila divFilaHover", "iconShow"])
    )
}

const onMouseLeave =()=> setisHover(["divFila", "iconHidden"])
//


//
const [selected, setSelected] = useState("")

const toSelect = (e) =>{
    selected == "" ? setSelected("selected") : setSelected("")
}
//


//
const BaseClass = isHover[0] 
const isSelectedClass = selected
const ComputedClass = BaseClass + " " + isSelectedClass  
//

    return(
    
        <div className={ComputedClass} id={id} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} onClick={toSelect}>
            <Registro value={item[claves[0]]} /> 
            <Registro value={item[claves[1]]} />
            <Registro value={item[claves[2]]} /> 
            <Registro value={item[claves[3]]} /> 
            
        </div> 

    )
}