var texto = document.getElementById("Resultado");
function calcular6() {
    var valN = parseInt(document.getElementById('valN').value);
    var array1 = [4, 9, 2, 3, 5, 7, 8, 1, 6];
    var array2 = [11, 24, 7, 20, 3, 4, 12, 25, 8, 16, 17, 5, 13, 21, 9, 10, 18, 1, 14, 22, 23, 6, 19, 2, 15];

    if (valN === 3 || valN === 5 || valN === 7 || valN === 9 || valN === 11) {
        var body = document.getElementById("cuadromagico");
        var tabla = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var cont2 = 0;
        if (valN === 3) {
            for (var i = 0; i < valN; i++) {
                var hilera = document.createElement("tr");
                for (var j = 0; j < valN; j++) {
                    cont2 = ++cont2;
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode(array1[cont2 - 1]);
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                tblBody.appendChild(hilera);
            }
        }
        if (valN === 5) {
            for (var i = 0; i < valN; i++) {
                var hilera = document.createElement("tr");
                for (var j = 0; j < valN; j++) {
                    cont2 = ++cont2;
                    var celda = document.createElement("td");
                    var textoCelda = document.createTextNode(array2[cont2 - 1]);
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                }
                tblBody.appendChild(hilera);
            }
        }
        tabla.appendChild(tblBody);
        body.appendChild(tabla);
        tabla.setAttribute("border", "1");
    } else {
        var resultado = document.createElement("input");
        resultado.type = "text";
        resultado.placeholder = "Este numero no se encuentra el el rango de 3 a 11 impar";
        resultado.className = "form-control";
        resultado.disabled = true;
        document.getElementById("cuadromagico").appendChild(resultado);
    }
}