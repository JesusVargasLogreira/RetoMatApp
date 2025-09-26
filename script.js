// script.js
let num1, num2, correctAnswer;

function generateProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;

    // Mostrar los números del problema en el HTML
    document.getElementById("num1").textContent = num1;
    document.getElementById("num2").textContent = num2;
    document.getElementById("resultMessage").textContent = "";
    document.getElementById("nextProblem").style.display = "none";
    document.getElementById("userAnswer").value = "";
}

document.getElementById("checkAnswer").addEventListener("click", function() {
    const userAnswer = parseInt(document.getElementById("userAnswer").value);

    if (userAnswer === correctAnswer) {
        document.getElementById("resultMessage").textContent = "¡Correcto! Bien hecho.";
        document.getElementById("nextProblem").style.display = "inline-block";
    } else {
        document.getElementById("resultMessage").textContent = "Incorrecto. Intenta nuevamente.";
    }
});

document.getElementById("nextProblem").addEventListener("click", function() {
    generateProblem();
});

generateProblem(); // Generar el primer problema
