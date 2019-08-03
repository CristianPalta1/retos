var texto = document.getElementById("Resultado");
function calcular13() {
    var numS2 = parseInt(document.getElementById('numS2').value);
    var resultado = 0;

    for (var i = 1; i <= numS2; i++) {
        resultado = resultado + (i / Math.pow(2, i));
    }
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    document.getElementById("Resultado").innerHTML = resultado;

}
