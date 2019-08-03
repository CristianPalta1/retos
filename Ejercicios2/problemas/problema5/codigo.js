var texto = document.getElementById("Resultado");
function calcular5() {
    var fechaB = document.getElementById('bisiesto').value;
    var year = parseInt(fechaB);


    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    var bisiesto = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;

    if (bisiesto === true) {
        document.getElementById('Resultado').innerHTML = "Este año es bisiesto";
    } else {
        document.getElementById('Resultado').innerHTML = "Este año no es bisiesto";
    }

}