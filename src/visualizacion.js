/*
------------------------------------------------------ MODULO VISUALIZACION ------------------------------------------------------

-INSTRUCCIONES:
  (1)Copiar Este fragmento html en index html en donde quiera que aparezca:
  
  <div id="titulosColumnas" class="titulosColumnas"></div>
    <div id="moduloPintarTablaaPartirdeObjetos" class="table"></div>
    <div id="navegacion" class="navegacion">
        <img id="flechaAtras" class="flechas" src="./imagenes/icons8-chevron-left-60.png" alt="">
        <span id="paginaActual"></span>
        <span>/</span>
        <span id="paginasTotales"></span>
        <img id="flechaAdelante" class="flechas" src="./imagenes/icons8-chevron-right-60.png" alt="">
    </div> 

  (2) Copiar en la carpeta del proyecto el archivo visualizacion.js y visualizacion.css donde correspondan. visualizacion.css linkearla en index.html
  (3) Copiar en la carpeta /imagenes/imagenesVisualizacion las imagenes
  (4) Tener un array de objetos en el proyecto o traerlo por peticion. Tienen que ser todos objetos con las mismas propiedades. maximo 8 propiedades
  (5) Importar o realizar la peticion de un array de objetos en main.js
  (6) Importar el modulo visualizacion.js en main.js
  (7) Configurar el modulo estableciendo valores para:
        -Objetos por pagina
        -Ancho de cada columna. Dejar un string vacio en las columnas no usadas ""

-LIMITES DEL MODULO (utilizando moduloVisualizacion.js):
  (1) No puede mostrar objetos de mas de 8 propiedades
  (2) --IMPORTANTE!-- Toma las propiedades del primer objeto del array. Si el primero objeto tiene menos propiedades que el resto, 
      el modulo va a buscar propiedes de mas o de menos en los siguientes objetos
  
  SE RECOMIENDA USAR EL MODULO VALIDACION O CREAR UN PROPIO QUE VERIFIQUE LOS DATOS A MOSTRAR PARA NO TENER PROBLEMAS


-- EL MODULO VISUALIZACION NO VALIDA LOS DATOS. PARA ESO USAR EL MODULO VALIDACION.JS --


*/


//IMPORTAR O SOLICITAR EL ARRAY DE OBJETOS:
import {arrayDeObjetos} from "./OrdenDelDiaArray.js"


//CONFIGURACIONES FUNCION mostrarElementos
//Aclaraciones: Las columnas no usadas asignar un string vacio a la propiedad ""

const mostrarElementosSetup = {
  "objetosPorPagina":24,
  "anchocolumna1": "250px",
  "anchocolumna2": "80px",
  "anchocolumna3": "380px",
  "anchocolumna4": "",
  "anchocolumna5": "",
  "anchocolumna6": "",
  "anchocolumna7": "",
  "anchocolumna8": ""

}


//INICIALIZACION DE VARIABLES
let paginaActual = 1 //NAVEGACION
let paginasTotales = 0; //NAVEGACION

//CAPTURA ELEMENTOS NECESARIOS DEL DOM
const flechaAtras = document.getElementById("flechaAtras")
const flechaAdelante = document.getElementById("flechaAdelante")
const paginaActualElement = document.getElementById("paginaActual")
const paginasTotalesElement = document.getElementById("paginasTotales")


//EVENT LISTENES NAVEGACION. SETEA EL NUEVO VALOR DE PAGINA ACTUAL Y LLAMA A LA FUNCION
flechaAtras.addEventListener("click", ()=>{
  if (paginaActual == 1){}
  else{
    paginaActual--
    paginaActualElement.textContent = paginaActual;
    mostrarElementos(arrayDeObjetos, paginaActual, mostrarElementosSetup.objetosPorPagina)
  } 
})

flechaAdelante.addEventListener("click", ()=>{
  if (paginaActual == paginasTotales){}
  else{
    paginaActual++
    paginaActualElement.textContent = paginaActual; 
    mostrarElementos(arrayDeObjetos, paginaActual, mostrarElementosSetup.objetosPorPagina)
  } 
})


// muestra los resultados del array en la cantidad de resultados por hoja definido
export const mostrarElementos = (arrayObjetosFiltrados, pagina)=>{
  const table = document.getElementById("moduloPintarTablaaPartirdeObjetos"); //captura el div padre
  const titulosColumnas = document.getElementById("titulosColumnas")
  let fragmentTable = document.createDocumentFragment(); //crea un fragmento para generar un fragmento con la tabla completa y empujarla como hijo del div padre
  let fragmentTitulosColumnas = document.createDocumentFragment(); //fragmento para generar un fragmento con los titulos de las columnas
  const claves = Object.keys(arrayObjetosFiltrados[0]); //array con las propiedades del objeto
  
  
  const elementosaMostrar = []
  const iterador = []
  table.innerHTML=""
  
  

  //DEFINICION DE VARIABLE PAGINAS TOTALES Y PINTADO DE PAG ACTUAL Y PAG TOTALES EN LOS ELEMENTOS HTML
  if (arrayObjetosFiltrados.length<=mostrarElementosSetup.objetosPorPagina) paginasTotales = 1
  else paginasTotales = Math.ceil(arrayObjetosFiltrados.length/mostrarElementosSetup.objetosPorPagina)
  paginaActualElement.textContent = paginaActual;
  paginasTotalesElement.textContent = paginasTotales;


  //ASIGNACION AL ARRAY elementosaMostrar DE LOS ELEMENTOS QUE HAY QUE PINTAR
  if (pagina==1) {
    iterador.push(0)
    iterador.push(mostrarElementosSetup.objetosPorPagina-1)
  }
  else{
    iterador.push(((pagina-1)*mostrarElementosSetup.objetosPorPagina))
    iterador.push(((pagina-1)*mostrarElementosSetup.objetosPorPagina)+mostrarElementosSetup.objetosPorPagina-1)
  }

  for (let i = iterador[0]; i <= iterador[1]; i++){
    if(arrayObjetosFiltrados[i]) elementosaMostrar.push(arrayObjetosFiltrados[i])
  }
    
  //TEMPLATES COLUMNS/ROWS DE LAS GRILLAS DE TITULOS Y TABLA
  table.style.gridTemplateColumns=`calc(${mostrarElementosSetup.anchocolumna1} + ${mostrarElementosSetup.anchocolumna2} + ${mostrarElementosSetup.anchocolumna3} + ${mostrarElementosSetup.anchocolumna4} + ${mostrarElementosSetup.anchocolumna5} + ${mostrarElementosSetup.anchocolumna6} + ${mostrarElementosSetup.anchocolumna7} + ${mostrarElementosSetup.anchocolumna8})`
  table.style.gridTemplateRows=`repeat(${elementosaMostrar.length}, 50px)`

  titulosColumnas.style.gridTemplateColumns=`${mostrarElementosSetup.anchocolumna1} ${mostrarElementosSetup.anchocolumna2} ${mostrarElementosSetup.anchocolumna3} ${mostrarElementosSetup.anchocolumna4} ${mostrarElementosSetup.anchocolumna5} ${mostrarElementosSetup.anchocolumna6} ${mostrarElementosSetup.anchocolumna7} ${mostrarElementosSetup.anchocolumna8}`
  titulosColumnas.style.gridTemplateRows=`50px`

  //TITULOS DE LAS COLUMNAS DE LA TABLA
  if (titulosColumnas.childNodes.length==0){
    claves.forEach((z, i)=>{
      const span = document.createElement("span")
      span.classList=`tituloSpan`
      span.id=`titulo${i}`
      span.textContent=z
      fragmentTitulosColumnas.appendChild(span)
    })
  }
  
  titulosColumnas.appendChild(fragmentTitulosColumnas)
  
  //TABLA
  elementosaMostrar.forEach((element,index)=>{
    const div = document.createElement("div")
    div.style.gridTemplateColumns=`${mostrarElementosSetup.anchocolumna1} ${mostrarElementosSetup.anchocolumna2} ${mostrarElementosSetup.anchocolumna3} ${mostrarElementosSetup.anchocolumna4} ${mostrarElementosSetup.anchocolumna5} ${mostrarElementosSetup.anchocolumna6} ${mostrarElementosSetup.anchocolumna7} ${mostrarElementosSetup.anchocolumna8}`
    div.style.gridTemplateRows=`50px`
    div.classList=`itemDiv`
    div.id=`itemDiv-${index}`

      claves.forEach((q, w)=>{
        const span = document.createElement("span")
        if (element[q] != "" || element[q] == 0){
          span.textContent=element[q]
        }
      span.classList=`itemSpan`
      span.id=`item${index}-${w}`
      div.appendChild(span)
      })
  
  fragmentTable.appendChild(div)
  })
  
  table.appendChild(fragmentTable)
}





