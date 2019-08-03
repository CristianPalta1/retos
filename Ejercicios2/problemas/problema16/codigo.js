var texto = document.getElementById("Resultado");
function calcular16() {
    var numPq = parseInt(document.getElementById("numPq").value);
    var sumnum = 0;
    texto.style.display = "inline";
    texto.style.fontSize = "2em";
    for (var i = 0; sumnum <= numPq; i++) {
        sumnum = sumnum + i;
        if(numPq==1 || numPq==0){
            document.getElementById("Resultado").innerHTML = "El natural mas pequeño es: " + numPq;
            return
         } else if (sumnum > numPq) {
            document.getElementById("Resultado").innerHTML = "El natural mas pequeño es: " + i;
            return
        } 
    }
}