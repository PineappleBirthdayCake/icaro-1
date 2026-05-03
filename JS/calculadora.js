const btncalc = document.getElementById("calcular-IMC");
const IMC = document.getElementById("IMC-resultado")
const row = document.getElementById("row-resultado-IMC")

const resultadoh5 = document.createElement("h5");


const calcular = function (altura, peso) {
    return peso / (altura * altura)
};

btncalc.addEventListener('click', function () {
    let peso = document.getElementById("input-peso").value;
    let altura = document.getElementById("input-altura").value;
    let resultado = calcular(altura, peso).toFixed(1);
    IMC.textContent = "IMC: " + resultado;
    if (resultado <= 0 || resultado == Infinity) {
        resultadoh5.className = '';
        resultadoh5.classList.add("text-danger");
        resultadoh5.textContent = "Error / Peso imposible";
    }
    else if (resultado >= 18.5 && resultado < 25) {
        resultadoh5.className = '';
        resultadoh5.classList.add("text-success");
        resultadoh5.textContent = "Peso normal";
    }
    else if (resultado >= 0 && resultado < 18.5) {
        resultadoh5.className = '';
        resultadoh5.classList.add("text-warning");
        resultadoh5.textContent = "Bajo peso";
    }
    else if (resultado >= 25 && resultado < 30) {
        resultadoh5.className = '';
        resultadoh5.classList.add("text-warning");
        resultadoh5.textContent = "Sobrepeso";
    }
    else if (resultado >= 30 && resultado < 35) {
        resultadoh5.className = '';
        resultadoh5.classList.add("text-warning2");
        resultadoh5.textContent = "Obesidad";
    }
    else if (resultado >= 35) {
        resultadoh5.className = '';
        resultadoh5.classList.add("text-danger");
        resultadoh5.textContent = "Obesidad Morbida";
    }
    row.append(resultadoh5);
});