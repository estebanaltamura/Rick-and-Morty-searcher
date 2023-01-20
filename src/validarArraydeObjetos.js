/*
VALIDACIONES:
  -que la cantidad de propiedades por objeto no sea mayor a 8.
  -Todos los elementos tengan la misma cantidad de propiedades.
  -Todos los elementos tengan las mismas propiedades con los mismos tipos de datos y en el mismo orden
*/

export const validarArraydeObjetos = arrayDeObjetos=>{
    const propiedadesArray = Object.keys(arrayDeObjetos[0]); //ARRAY PROPIEDADES PARA COMPARAR
    const tiposValues = Object.values(arrayDeObjetos[0]); //ARRAY VALORES PARA LUEGO GENERAR UN ARRAY DE TYPEOF DE ESOS VALORES
    
    tiposValues.forEach((Tipos, indexTipos)=>{
      tiposValues[indexTipos] = typeof(Tipos)
    })
  
    //VERIFICA OBJETOS TENGAN 8 O MENOS PROPIEDADES
    const ochoPropiedadesOmenos = arrayDeObjetos.every(props=>Object.keys(props).length<9)
  
    //TODOS LOS OBJETOS TENGAN LA MISMA CANTIDAD DE PROPIEDADES
    const mismaCantidaddePropiedades = arrayDeObjetos.every(props2=>Object.keys(props2).length==Object.keys(arrayDeObjetos[0]).length)
    
    //VERIFICA QUE LAS PROPIEDADES SEAN LAS MISMAS EN TODOS LOS OBJETOS
    const mismasPropiedades = []
  
    arrayDeObjetos.forEach(element1=>{
      mismasPropiedades.push(propiedadesArray.every((elementoMP,index)=>
      elementoMP == Object.keys(element1)[index] 
      ))  
    })
  
    const mismasPropiedadesResultado = mismasPropiedades.every(mismasProps=>mismasProps == true)
    
    //VERIFICA QUE EL TIPO DE DATO POR CADA PROPIEDAD SEA LA MISMA PARA TODOS LOS OBJETOS
    const mismosTiposDeDatos = []
  
    arrayDeObjetos.forEach(element2=>{
      mismosTiposDeDatos.push(tiposValues.every((elementoMT,index)=>
      elementoMT == typeof(Object.values(element2)[index])
      ))  
    })

    const mismosTiposDeDatosResultado = mismosTiposDeDatos.every(mismosTipos=>mismosTipos == true)

    //VERIFICA QUE NO HAYA VALORES VACIOS
    const ValidarValorVacio = []

    arrayDeObjetos.forEach(element3=>{
        ValidarValorVacio.push(propiedadesArray.every((elementoVV)=>
        element3[elementoVV] !== ""
        ))  
    })
  
    const ValidarValorVacioResultado = ValidarValorVacio.every(validarVV=>validarVV == true)
    
    //RETORNO TRUE O EL REPORTE DE ERRORES POR CONSOLE.LOG
    if (ochoPropiedadesOmenos && mismaCantidaddePropiedades && mismasPropiedadesResultado && mismosTiposDeDatosResultado && ValidarValorVacioResultado) return true
    else {
      console.log(`\n\n-------INCONSISTENCIA EN LOS DATOS-------\n\nLa cantidad de propiedades es igual o menor a 8?  ${ochoPropiedadesOmenos}\n\nLa cantidad de propiedades es igual en todos los elementos?  ${mismaCantidaddePropiedades}\n\nLas propiedades son las mismas en todos los objetos?  ${mismasPropiedadesResultado}\n\nLos tipos de datos de los value de cada propiedad son iguales en todos los objetos?  ${mismosTiposDeDatosResultado}\n\nTodos los value tienen un valor?  ${ValidarValorVacioResultado}\n\n-----------------------------------------`)
      return false
    }  
  }