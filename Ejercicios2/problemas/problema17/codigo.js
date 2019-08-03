var texto = document.getElementById("Resultado");
function calcular17() {
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    var numero = document.getElementById('numerof').value;
    var num = parseInt(numero);
    if(num > 0){
     document.getElementById("Resultado").innerHTML = "Positivo";
    }
    if(num === 0){
     document.getElementById("Resultado").innerHTML = "Igual a cero";
    }
    if(num < 0){
     document.getElementById("Resultado").innerHTML = "Negativo";
    }
 }