/*
OBJECT XMLHttpResquest (xrh), encontrado y reconocidos como XMLHTTP, que
ayuda a generar unas interfaces para:
1.Realizar peticiones a servicios web, mediante la directiva open()
2.Enviar peticiones, concretas,mediante la directiva send()
3.Recibir las respuestas desde la propiedad responseText

*/

var xrh;

function buscarPokemon() {


    //Creamos el objeto,lo generamos, y obtenemos la informacion de URL
    xhr = new XMLHttpRequest();
    //Recuperar el nombre del pokemon introducido(por el propio usuario)
    var dato = nombre.value;
    /* var dato= document.getElementById('nombre').value */

    //1º Preparamos la peticion

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + dato, true);//true: asincronia, ed:en segundo plano

    //2º Desarrollamos la respuesta, como la queremos? En este caso en formato json
    xhr.setRequestHeader("accept", "application/json");

    //3º Informar y detectar la funcion que procesa la respuesta
    xhr.onreadystatechange = procesarRespuesta;//sin parentesis, 

    //4º Enviar la peticion

    xhr.send();

    //5º Gestion de error
    xhr.onerror = procesarRespuesta;

}

function procesarRespuesta() {

    //Buscaremos solo habrá de respuesta siempre y cuando hayamos recibido toda la informacion
    if (xhr.readyState = 4) { // Estado de conexion creada y finalizada correctamente

        var respuesta = JSON.parse(xhr.responseText);// JSON.parse(cadena, variable), transformarlo a cadena string.
        console.log(respuesta);// Control de daños o evaluacion
        document.getElementById('resultado').innerText =
            "Nombre: " + respuesta.name + "\n" +
            "Altura:" + respuesta.height + "\n" +
            "Peso: " + respuesta.weight + "\n" +
            "Habilidades: " + "\n"



        var habilidades = respuesta.abilities;
        for (var i in habilidades) {
            document.getElementById('resultado').innerText +=
                "\t" + habilidades[i].ability.name + "\n";
       }

    }


}

function procesarError() {

    document.getElementById('resultado').innerText = "ERROR#"

}