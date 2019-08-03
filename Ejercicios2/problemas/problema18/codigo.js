
var texto = document.getElementById("Resultado");
var numero = 0;


function calcular() {
    numero = parseInt(document.getElementById("numero").value);
    if(numero > 0){
        console.log("El numero es positivo");
    }
    if(numero < 0){
        console.log("El numero es negativo");
    }
    if(numero === 0){
        console.log("El numero es cero");
    }
    
    texto.style.display = "inline";
   
}

function limpiar() {
    hora = 0;
    minuto = 0;
    h24 = 0;

    location.reload();
}