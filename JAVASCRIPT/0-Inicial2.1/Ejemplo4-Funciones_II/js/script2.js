


function acceso(){
    /*
1.    La recogida de las variables será nuestro punto de partida en todo desarrollo script,
        utilizando el metodo getElementById, que apunta al DocType y alli accedemos al valor
        .value
    */
var nombreAcceso=document.getElementById('nombre').value;
var apellidoAcceso=document.getElementById('apellido').value;
var correoEAcceso=document.getElementById('email').value;
/*
2. Soltado la ejecucion de las variables manejadas, a otro puntero con el metodo igualmente
getElementById
*/
document.getElementById('resultado').innerHTML=
"AUTORIZADA A: " + nombreAcceso + " " + apellidoAcceso;

}