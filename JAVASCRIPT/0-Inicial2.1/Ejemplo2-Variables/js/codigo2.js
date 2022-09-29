var texto="Hola";//Variable de texto-String
var numero=8.4;//Variable number
var buleana=true;//variable boolean

var entrada="poeta en new york";
var id=0;
var abierto=true;
/*
Concatenacion de las variables

Quizás el mas representativo lo tenemos en el '+' ELEMENTO CONCATENADOR 
Añadimos los elementos de escape, o backslash. siempre acompañados de '/'.
Nos van a ayudar a resolver la presentacion visual desde javascript con simbolos
que no pueden ser incluidos desde otros entornos

Secuencias de escape                    resultado

\'                                      comilla simple
\"                                      comillas dobles
\/                                      slash / 
\n                                      salto de linea
\t                                      tabulacion

*/
document.write(texto+"<br>");
document.write(numero+"<br>");
document.write(buleana + "<br>");

alert(texto+"\n"+numero+"\n"+buleana);