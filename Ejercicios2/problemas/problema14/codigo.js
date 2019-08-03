var texto = document.getElementById("Resultado");
function calcular14() {

    var numF = parseInt(document.getElementById('numF').value);
    var resultado = '';
    var salto = '<br>'

    for (var x = 1; x <= numF; x++) {
        var point = '*'
        var linePoint = ''
        for (var j = 1; j <= x; j++) {
            linePoint += point
        }
        resultado += linePoint + salto;
    }
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    document.getElementById("Resultado").innerHTML = '<span class="text-primary">' + resultado + ' </span>';
}