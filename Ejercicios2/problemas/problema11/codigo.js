var texto = document.getElementById("Resultado");
function calcular11() {

    var numP = parseInt(document.getElementById('numP').value);
    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var resultado = [];
    var resultado2 = 0;

    for (var i = 0; i < array.length; i++) {
        resultado2 = numP % array[i];
        resultado.push(resultado2);
    }

    var resul = resultado.filter(number => number < 1);
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    if (resul.length < 3) {
        document.getElementById("Resultado").innerHTML= "Es primo";
    } else {
        document.getElementById("Resultado").innerHTML = "No es primo";
    }

}