

var telefonos=["+34-2-62010122","+34 2 62010125","+34-2 62010124","+34-2-620101223",
"+34 2-620101222","+34-2-62010121","+34-2-620101220","+54-2-620101226","+56-2-xxxxxxxx",
"+34-2-62010120"];

//Creamos nuestra expresion regular o pattern:
var expresion=/^\+34(-2-|2)\d{8}$/;
/* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" la primera estructura con letras o numeros, combinados
, una arroba y seguidamente letras y numeros con un. y al menos 2 caracteres = Correo electronica>
pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" Minimo ocho caracteres, contenga alguna mayuscula,
que contenga alguna minuscula y al menos un digito */

/*Recorrido de la variable
utilizando la expresion de itinerante de for of. Expresion que su estructura funciona 
de la misma manera for, como estructura de bucle, añadiendo ventajas a su expresion
for ( var nombre of variable a recorrer){
    
    declaracion del recorrido y su aplicacion 
}
Aclaracion: será en la variable nombre donde guardará los datos del recorrido
*/
for( var tlf of telefonos){

    var fila ="<tr>";
    fila+="<td>"+ tlf
    fila+="<td>"+expresion.test(tlf)+"</td>"
    fila+="<tr>";
    document.getElementById('tabla').innerHTML+=fila;

}



