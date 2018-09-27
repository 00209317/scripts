//Declaracion de atributos del objeto dia
let dia = [{
    events: [],
    accident: null
}]

function add_day(events, accident) {
    dia.push({ events, accident })
}

add_day("Saltar, Correr", false);
add_day("Saltar", false);
add_day("Saltar, hablar", true);
add_day("Saltar, reir", false);

for(let i = 1; i < dia.length; i++){
    console.log(dia[i]);
}

//Funcion para el calculo de phi
let arr = [20, 10, 30, 50];

function phi([n00, n01, n10, n11]){
    return (n11 * n00 - n10 * n01)/Math.sqrt(n11+n01+n10+n00+n11+n10+n01+n00);
}