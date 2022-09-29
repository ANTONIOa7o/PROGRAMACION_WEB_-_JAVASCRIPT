

var n1=parseInt(window.prompt('Introduce el primer numero: '));
var n2=parseInt(window.prompt('Introduce el primer numero: '));

function sumar(){

   var resultado=n1+n2;
    swal("La suma es: " + resultado);
}

function restar(){
 swal("la resta es:" + (n1-n2)); 
}

function multiplicar(){
    swal("la multiplicacion es:" + (n1*n2)); 
}

function dividir(){
    swal("la divison es:" + (n1/n2)); 
}