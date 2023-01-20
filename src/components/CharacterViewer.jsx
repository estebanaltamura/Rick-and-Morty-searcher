import React from "react";
import "../style-sheets/CharacterViewer.css"

export function CharacterViewer({dataParaCard}){

    
    return(
        <div className="characterViewerContainer"> 
            <img className="imagen" src={dataParaCard[6].image}/>
            <span className="tituloCaracter">Location</span>
            <span className="value">{dataParaCard[6].location}</span>
            <span className="tituloCaracter">Origin</span>
            <span className="value">{dataParaCard[6].gender}</span>
        </div> 

    )
}

