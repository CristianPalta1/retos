var texto = document.getElementById("Resultado");
function calcular4() {
    var ano = document.getElementById('ano').value;
    var valormes = 0;
    var valordia = 0;

    A = ano % 19;
    B = ano % 4;
    C = ano % 7;
    D = (19 * A + 24) % 30;
    E = (2 * B + 4 * C + 6 * D + 5) % 7;
    N = (22 + D + E);

    if (N > 31) {
        valormes = 4;
        valordia = D + E;
    } else {
        valormes = 3;
        valordia = D + E;
    }

    texto.style.display = "inline";
    texto.style.fontSize = "2em";

    var fecha = new Date(ano, valormes, valordia)
    document.getElementById('Resultado').innerHTML = fecha;
}