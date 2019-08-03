var texto = document.getElementById("Resultado");
function calcular7() {
    var numPerfecto = 5;
    var arraynum = [];

    for (var i = 1; i <= numPerfecto; i++) {
        if ((Math.pow(2, (i)) - 1) % i === 1) {
            var numeroPerfecto = Math.pow(2, (i - 1)) * (Math.pow(2, (i)) - 1);
            arraynum.push(numeroPerfecto);
        } else {
            console.log("Numero no es perfecto");
        }
    }

    var primerNum = arraynum[0];
    var segundoNum = arraynum[1];
    var tercerNum = arraynum[2];
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    document.getElementById("Resultado").innerHTML = "Primero: " + primerNum + ", " + "Segundo: " + segundoNum + " y " + "Tercero: " + tercerNum;
}