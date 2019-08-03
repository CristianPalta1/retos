var texto = document.getElementById("Resultado");
function calcular15() {
    var numPerfecto = parseInt(document.getElementById('numD').value);;
    var arraynum = [];
    var cont = 0;

    for (var i = 1; i <= numPerfecto; i++) {
        if ((Math.pow(2, (i)) - 1) % i === 1) {
            var numeroPerfecto = Math.pow(2, (i - 1)) * (Math.pow(2, (i)) - 1);
            arraynum.push(numeroPerfecto);
        } else {
            console.log("Numero no es perfecto");
        }
    }
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    document.getElementById("Resultado").innerHTML = arraynum;
}