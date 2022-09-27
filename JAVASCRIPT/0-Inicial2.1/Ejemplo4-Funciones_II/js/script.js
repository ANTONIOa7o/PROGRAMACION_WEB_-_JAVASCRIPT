/*
El metodo getElementById()-> NOS DEVUELVE EL ELEMENTO QUE CONTIENE EL puntero id="";
con el valor especificado. Siendo su uso muy extendido cuando se quiere manipular, trasladar u obtener
informacion de un cierto elemento de su documento
Sintaxis:
    elemento.getElementById('nombre(id)').innerHtml="sentencias";

*/

function funcionesMath(){
    document.getElementById('resultado').innerHTML=
    "logaritmo: " + Math.log(1000)+"<br>"+
    "Exponencial: " + Math.exp(8)+"<br>"+
    "Raiz Cuadrada: " + Math.sqrt(9)+"<br>"+
    "Potencia^(base 2) exponente(exponente 8): "+ Math.pow(2,8)+"<br>"+
    "Valor absoluto: " + Math.abs(-65.14)+"<br>"+
    "Redondeos a la Baja: " + Math.floor(6.3458)+"<br>"+
    "Redondeo a la Alza: " + Math.ceil(6.3458)+"<br>"+
    "Redondeo medio: " + Math.round(6.3458)+"<br>"+
    "Random o semilla: "+ Math.random()+"<br>"+
    "Random del 1 al 10: " + Math.random()*10 + "<br>"+
    "Valor máximo: " + Math.max(1,4,8,3,6,6,9)+"<br>"+
    "Coseno Pi: " + Math.cos(Math.PI)+"<br>";
}

function funcionesString(){
    var texto = "Las funciones estructura de Cadena Javascript";
    document.getElementById('resultado').innerHTML=
    "Minusculas " + texto.toLocaleLowerCase()+"<br>"+
    "Mayusculas " + texto.toLocaleUpperCase()+"<br>"+
    "Localizacion de caracteres "+ texto.indexOf('@')+"<br>"+
    "<label style='color:red'>*Localizacion de una cadena de texto: </label>" + texto.length+"<br>"+
    "Unicode "+ String.fromCharCode(960)+"<br>"+
    "valor de unicde" + texto.charCodeAt(texto.indexOf('J'))+"<br>";

}

function funcionesDate(){

    var fecha = new Date();
    document.getElementById('resultado').innerHTML=
    "Fecha standart: " + fecha.toLocaleDateString()+"<br>"+
    "Horas " + fecha.toLocaleTimeString()+"<br>"+
    "Minutos "+ fecha.getMinutes()+"<br>"+
    "Segundos " + fecha.getSeconds()+"<br>"+
    "Milisegundos " + fecha.getMilliseconds()+"<br>"+
    "mes* "+ fecha.getMonth()+"<br>"+
    "Dia " + fecha.getDay()+"<br>"
}
 