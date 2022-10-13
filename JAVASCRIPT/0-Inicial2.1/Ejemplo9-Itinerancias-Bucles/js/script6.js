

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
/*
Ejercicio: 

Validar que los campos esten relleno o sean los correctos, y a su vez generar alguna respuesta al usuario
donde o bien traslademos que los campos han de estar cumplimentados o bien datos correctos, ....*/