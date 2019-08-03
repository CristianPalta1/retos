var texto = document.getElementById("Resultado");
function calcular() {

    var salarioA = document.getElementById('salarioA').value;
    var salarioAct = parseInt(salarioA);

    if (salarioAct >= 0 && salarioAct <= 9000) {
        var resultado = salarioAct + (salarioAct * 20) / 100;
    }
    if (salarioAct >= 9001 && salarioAct <= 15000) {
        var resultado = salarioAct + (salarioAct * 10) / 100;
    }
    if (salarioAct >= 15001 && salarioAct <= 20000) {
        var resultado = salarioAct + (salarioAct * 5) / 100;
    }
    if (salarioAct > 20000) {
        var resultado = salarioAct + (salarioAct * 0) / 100;
    }
    texto.style.display = "inline";
    texto.style.fontSize = "2em";

    document.getElementById("Resultado").innerHTML = resultado;
}