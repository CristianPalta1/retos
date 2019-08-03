var texto = document.getElementById("Resultado");
function calcular2() {

    var limite = parseInt(document.getElementById('limite').value);
    var suma = 0;
    var pi;

    for (var i = 1; i <= limite; i++) {
        suma += 1 / (i ** 2);
    }

    pi = Math.sqrt(suma * 6);
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    document.getElementById("Resultado").innerHTML = pi;
}