
/*
ASIGNACION DE VARIABLES A UN METODO

A menudo tendremos la necesidad de asignar un valor determinado,
que depende del usuario o de la naturaleza del mismo

Metodo window.promt => Generador de dialogo que va a contener un 
cuadro de texto en linea, donde guardará un valor, añadiendo un boton
"Cancel" y "ok".
WARNING:!!!!!!Dicho metodo simpre devuele un STRING
*/

var nombre=window.prompt("Introduce tu nombre:");
var apellidos=window.prompt("Introduce tus apellidos");
var edad=window.prompt("Introduce edad");

document.write("Hola! " + "<br>"+ "mi nombre es:" + nombre +
 " mis apellidos son: " + apellidos+ "y mi edad es: " + edad);

 console.log("Hola " + "\n" + "mi nombre es " + nombre+ " y mis apellidos son: "+ apellidos+ "\n" +" siendo mi edad es de: " +edad)