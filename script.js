// script.js
let num1, num2, correctAnswer, operator;
let correctCount = 0;
let wrongCount = 0;

function generateProblem() {
    const operations = ["+", "-", "×", "÷"];
    operator = operations[Math.floor(Math.random() * operations.length)];

    if (operator === "+") {
        num1 = Math.floor(Math.random() * 50) + 10;
        num2 = Math.floor(Math.random() * 50) + 10;
        correctAnswer = num1 + num2;
    } else if (operator === "-") {
        num1 = Math.floor(Math.random() * 50) + 20;
        num2 = Math.floor(Math.random() * 20) + 1;
        correctAnswer = num1 - num2;
    } else if (operator === "×") {
        num1 = Math.floor(Math.random() * 12) + 2;
        num2 = Math.floor(Math.random() * 12) + 2;
        correctAnswer = num1 * num2;
    } else if (operator === "÷") {
        num2 = Math.floor(Math.random() * 12) + 2;
        correctAnswer = Math.floor(Math.random() * 12) + 2;
        num1 = num2 * correctAnswer; // división exacta
    }

    // Mostrar en HTML
    document.getElementById("num1").textContent = num1;
    document.getElementById("operator").textContent = operator;
    document.getElementById("num2").textContent = num2;
    document.getElementById("resultMessage").textContent = "";
    document.getElementById("nextProblem").style.display = "none";
    document.getElementById("userAnswer").value = "";
}

document.getElementById("checkAnswer").addEventListener("click", function () {
    const userAnswer = parseInt(document.getElementById("userAnswer").value);

    if (userAnswer === correctAnswer) {
        document.getElementById("resultMessage").textContent = "✅ ¡Correcto! Bien hecho.";
        correctCount++;
        document.getElementById("correctCount").textContent = correctCount;
        document.getElementById("nextProblem").style.display = "inline-block";
    } else {
        document.getElementById("resultMessage").textContent = "❌ Incorrecto. Intenta nuevamente.";
        wrongCount++;
        document.getElementById("wrongCount").textContent = wrongCount;
    }
});

document.getElementById("nextProblem").addEventListener("click", function () {
    generateProblem();
});

// Generar el primer problema al cargar
generateProblem();
