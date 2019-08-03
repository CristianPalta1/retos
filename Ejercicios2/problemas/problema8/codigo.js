var texto = document.getElementById("Resultado");

function calcular8() {
    var valx = parseInt(document.getElementById('valx').value);
    var suma = 0;
    var total = 0;

    for (var i = 1; i <= 100; i++) {
        var numeroSuma = Math.pow(valx, (i + 1)) / (this.factori(i));
        total = total + numeroSuma;
    }
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    suma = 1 + total;
    document.getElementById("Resultado").innerHTML = suma;
}

function factori(j) {
    var factorial = 1;
    for (var i = 1; i <= j; i++) {
        factorial *= i;
    }
    return factorial;
}