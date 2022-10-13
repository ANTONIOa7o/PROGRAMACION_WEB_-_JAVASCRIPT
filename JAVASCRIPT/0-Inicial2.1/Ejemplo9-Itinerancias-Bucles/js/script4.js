/*
onchage dirgido como evento del click, diversificado
*/

var provincias=['Madrid','Valencia','Sevilla','Barcelona','Teruel'];

for( i =0; i<provincias.length;i++){

    var opt = new Option(provincias[i],i);
    document.getElementById('provincias').options[i+1]=opt;
}

function seleccion(){

    var prov = document.getElementById('provincias').options[
        document.getElementById('provincias').selectedIndex].text;

        swal("Has seleccionado la provincia: " + prov);
    
}