var radio = 0;
var minuto = 0;
// var ladoc = 0;
var pi = 3.14159265359;
var resultado = '';

// var p = 0;
// var p2 = 0; 
var h24 = 0;
// var total2 = 0;
var texto = document.getElementById("Resultado");

// console.log(hora, minuto, h24);


function calcular() {
    radio = parseInt(document.getElementById("radio").value);
    // minuto = parseInt(document.getElementById("minuto").value);
    // ladoc = parseInt(document.getElementById("ladoc").value);
    // p = ((ladoa + ladob + ladoc) / 2);
    // p2 = Math.pow(p,2);
    // total = ( (p2 - ( p *ladoa))*(p2 - ( p *ladob))*(p2 - ( p *ladoc)) );
    // total2 = Math.sqrt(p2);
    // var masagramo = parseFloat((masa / 1000));
    var diametro = radio * 2;
    var circunferencia = (diametro * pi);
    console.log(circunferencia, diametro);

    resultado = 'Diametro:' + diametro + ' ' + 'Circunferencia' + circunferencia;
    texto.style.display = "inline";
    texto.style.fontSize = "5em";
    
    document.getElementById("Resultado").innerHTML = resultado;
}

function limpiar() {
    diametro = 0;
    circunferencia = 0;
    radio = 0;

    location.reload();
}