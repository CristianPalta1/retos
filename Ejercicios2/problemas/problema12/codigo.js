var texto = document.getElementById("Resultado");
function calcular12() {
    var numS = parseInt(document.getElementById('numS').value);
    var resultado = 0;

    for (var i = 1; i <= numS; i++) {
        resultado = resultado + (1 / i);
    }
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    document.getElementById("Resultado").innerHTML = resultado;

}
