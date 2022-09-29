

function mensaje(){
    var miClave=document.getElementById('clave').value;
        /*
    var email=email.value  ⇓
    */
    var email=document.getElementById('email').value;
    document.getElementById('resultado').innerHTML="Clave correcta " + email +
    " pulse para ingresar";
}

function limpiar(){
    document.getElementById('resultado').innerHTML="";
}