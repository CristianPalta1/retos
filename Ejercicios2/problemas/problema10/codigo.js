var texto = document.getElementById("Resultado");
function calcular10() {

    a = Math.abs(parseInt(document.getElementById('valA').value));
    b = Math.abs(parseInt(document.getElementById('valB').value));
    var i1 = Math.max(a, b);
    var i2 = Math.min(a, b);
    var iaux;

    do {
        iaux = i2;
        i2 = i1 % i2;
        i1 = iaux;
    } while (i2 !== 0);
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    document.getElementById("Resultado").innerHTML = i1;
}