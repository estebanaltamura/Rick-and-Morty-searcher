import React, {useState, useEffect}from "react";
import "../style-sheets/CharacterViewer.css"

export function CharacterViewer({dataParaCard, selectedCharacterId}){

    
     
    return(
        <div className="characterViewerContainer">   
            {  
                <>
                    <img className="imagen" src={dataParaCard.length == 0 ? "" :  dataParaCard[selectedCharacterId].image}/>
                    <span className="tituloCaracter">Location</span>
                    <span className="value">{dataParaCard.length == 0 ? "" : dataParaCard[selectedCharacterId].location}</span>
                    <span className="tituloCaracter">Origin</span>
                    <span className="value">{dataParaCard.length == 0 ? "" : dataParaCard[selectedCharacterId].gender}</span>
                </>
            }
            
        </div> 

    )
}



