function inicio(){

    target.style.opacity="0.6";
}

function fin(){
    
    target.style.opacity="1";
}

function leave(){
    EventTarget.style.border="none";//Revistar event, llamada a style

}


function over(){
    event.target.style.border="4px solid #aaa";
    event.preventDefault();
}

/*
appendChild(), uno de los metodos delos cuales establece dentro dentro de la interfaz, ultilizado
para anexionarse, anexion entendida como un nodo. Es decir: elementos unidos a un nodo padre o elemento
principal
*/

function  drop(){
    event.target.appendChild(document.getElementById('arrastra'));
    event.target.style.border='none';

}