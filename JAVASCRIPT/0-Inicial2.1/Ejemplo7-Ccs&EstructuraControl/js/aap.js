var estiloBorde = false;//No tiene borde
var estiloColor = false;
var estiloSombra = false;




function borde() {

    if (estiloBorde == false) {
        document.getElementById('cuadrado').style.border = '5px solid #0d47a1';
        estiloBorde = true;//La sentencia clave para redundar en el ciclo
    } else {
        document.getElementById('cuadrado').style.border = 'none';
        estiloBorde = false;
    }

}

function color() {//! representa la misma sentencia que en la linea 10, la negacion de estilo borde
    if (!estiloColor) {
        document.getElementById('cuadrado').style.backgroundColor = 'pink';
        estiloColor = true;//La sentencia clave para redundar en el ciclo
    } else {
        document.getElementById('cuadrado').style.backgroundColor = ' #2196f3';
        estiloColor = false;
    }

}
function sombra() {
    if (!estiloSombra) {
        document.getElementById('cuadrado').className = 'sombra';

    } else {
        document.getElementById('cuadrado').className = null;

    }
            estiloSombra=!estiloSombra;
    //sustitucion de variable booleana desglosada en cada sentencia a un que sale de la estructura
}