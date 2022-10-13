var mapa;

function mostrarMapa() {
    //1. Comprobar si el navegador y el dispositivo soportan o tienen recursos de geolocalizacion
    if (navigator.geolocation) {
        //2. obtener la ubicacion
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    } else {
        alert("Tu dispositivo o navegador no puede acceder a la localizacion");
    }
    //3. Generar opciones de la variable en nuestro mapa
    var opciones = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    4.//asigno la variable mapa a su visualizacion
    mapa = new google.maps.Map(document.getElementById('resultado'), opciones);

}

function mostrarLocalizacion(position) {

    //5. Su mision princial plasmar las coordenadasm y obtenemos las coordenadas
    var pos = new google.maps.LatLng(40.4350181198291, -3.65198716670489);

    //6 Contenido del mapa, informacion

    /* var info = new google.maps.InfoWindow({
        map: mapa,
        position: pos,
        content: "estamos aqui"
    }); 
    Entre el 6 y 7 google,en su cuenta nos ofrece determinadas elementos de la variable marker
    y info, para poder personalizar.
    */

    //7 Mostramos marca de posicion
    var marker = new google.maps.Marker({//1?
        position: { lat: 40.4350181198291, lng: -3.65198716670489 },
        map: mapa,
        title: 'Negocio?'
    });
    //8 Nos aseguramos de centrar elmapa,
    mapa.setCenter(pos);


}

function manejarError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Permiso Denegado');
            break;

        case error.TIMEOUT:
            alert('Tiempo de espera agotado');
            break;

        case error.POSITION_UNVAILABLE://unavailalbe, revisar 
            alert('No detecta la ubicacion');
            break;

        case error.UNKNOWN_ERROR:
            alert('Error desconocido');
            break;
/* 
        default:
            alert('Error desconocido');
            break; */
    }



}