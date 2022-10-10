/* var inputNumero = document.getElementById('numero');//Ahora mismo apuntaria donde esta el valor */
/* var inputNumero=numero.value*/

function tablaMultiplicar() {
  /*   var numero = parseInt(inputNumero.value); */
    //Llamar al valor de una variable, referencia a otra y parseada
    var y = parseInt(juanita.value);
    var tabla = "";

    for (i = 1; i <= 10; i++) {

        tabla += y + "x" + i + "=" + y*i + "<br>"; 
        
        console.log(tabla)// en la primera iteracion será 2x1= 1 , la siguiente iteneracion sera 2x2=4, 2x10=20
    }

document.getElementById('resultado').innerHTML=(tabla);
}
