function ejecutar(){

    var opcion = document.getElementById('opcion').value;//Recogemos la/s variable
    
var respuesta =document.getElementById('resultado');//Soltamos la variable


 switch (opcion) {
    case "1":
        respuesta.innerText = "FORMATEANDO EL DISCO....., por favor espere";
        break;
    case "2":
        respuesta.innerText ="RECOPILANDO DATOS PARA SU ELIMINACION...";
        break;
    
    case "3":
        respuesta.innerText="RECOPILANDO DATOS DE DE CONEXION Y COOKIES...";
        break;
    
    case "4":
        respuesta.innerText="SU NAVEGADOR ESTA SIENDO MONOTORIZADO.."+
        navigator.userAgent;
        break;
    case "5":
        respuesta.innerText="BORRANDO DISCO..., por favor espere";
        break; 

    default:
        respuesta.innerText="Es necesario elegir las opciones del 1 al 5"
        break;
 }


}