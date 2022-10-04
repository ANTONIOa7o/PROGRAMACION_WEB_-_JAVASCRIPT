/*
 *Cálculo de un Microcredito
 crt=credito*redito*tiempo
 Calculo de un crédito, donde el tiempo sea maximo 24 meses, el tipo de interes
 5%, a 60 meses el interes será de 8%, a partir de 60 meses interes 10%  
*/

function calcular() {
    var capital = parseFloat(window.prompt('Introduce el capital que deseas:'));
    var tiempo = parseInt(window.prompt('En cuantos meses desea pagarlo comodamente'));
    var redito = 0;

    if (tiempo <= 24) {
        redito = 0.05;
    } else if (tiempo <= 60) {
        redito = 0.08;
    } else {
        redito = 0.10
    }
    var interes = (capital * redito / tiempo);
    document.getElementById('resultado').innerText = "Credito solicitado: " + capital +
        "€" + "\n" + "Tipo de interes será: " + redito * 100 + "%" + "\n" + "Tiempo a paga: " + tiempo / 12 + "años" +
        "\n" + "Intereses a pagar: " + interes.toFixed(2) + "€"
    /*
    toFixed,metodo de ajuste de decimales
    */

    var cuota = (interes + capital / tiempo);
    document.getElementById('resultado2').innerText = "El total de su cuota a abonar cada mes será: " + cuota + "€"



}