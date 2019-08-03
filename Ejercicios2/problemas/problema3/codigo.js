var texto = document.getElementById("Resultado");

function agregarInputs() {
    var valorN = parseInt(document.getElementById('valorN').value);

    for (var i = 1; i <= valorN; i++) {
        var inputN = document.createElement("input");
        inputN.type = "number";
        inputN.placeholder = "Ingrese aquí el numero" + i;
        inputN.id = "n" + i;
        inputN.className = "form-control";

        var label = document.getElementById("inputN").appendChild(document.createElement("label"));
        label.className = "control-label";
        label.innerHTML = "N" + i;
        document.getElementById("inputN").appendChild(inputN);
        document.getElementById("inputN").appendChild(document.createElement("br"));
    }

}

function calcular3() {
    var valorN = parseInt(document.getElementById('valorN').value);
    var valorNarray = [];
    var menor = 0;
    var mayor = 0;
    var suma = 0;
    var media = 0;

    for (var i = 1; i <= valorN; i++) {
        var inputNumber = parseInt(document.getElementById('n' + i).value);
        valorNarray.push(inputNumber);
    }
    valorNarray.sort();

    menor = valorNarray[0];
    mayor = valorNarray[valorN - 1];

    for (var i = 0; i <= valorN - 1; i++) {
        suma = suma + valorNarray[i];
    }
    media = suma / valorN;
    // document.getElementById("Resultado").innerHTML = h;
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    document.getElementById("Resultado").innerHTML = "El menos es: " + menor + ", " + "El mayor es: " + mayor + " y " + "La media es: " + media;
}