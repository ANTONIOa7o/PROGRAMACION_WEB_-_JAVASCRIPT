var capital = "";

function inicio() {

    event.target.style.opacity = '0.8';
    capital = event.target.id
}
function fin() {

    event.target.style.opacity = '1';
}

function leave() {

    event.target.style.border = 'none'
}
function over() {

    var pais = event.target.id;
    if ((pais == "españa" && capital == "madrid")
        || (pais == "portugal" && capital == "lisboa")
        || (pais == "francia" && capital == "paris")) {
        event.target.style.border = "5px solid green";
    } else {
        event.target.style.border = "5px solid red"
    }
    event.preventDefault();
}
function drop() {
    var pais = event.target.id;
    if ((pais == "españa" && capital == "madrid")
        || (pais == "portugal" && capital == "lisboa")
        || (pais == "francia" && capital == "paris")) {
        event.target.appendChild(document.getElementById(capital));
    } 
        event.target.style.border = "none";

    }
