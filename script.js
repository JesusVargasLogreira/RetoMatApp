let currentAnswer = 0;

function generateProblem() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let question = `${num1} ${operation} ${num2}`;
  currentAnswer = eval(question);

  document.getElementById('problem').textContent = `¿Cuánto es ${question}?`;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const feedback = document.getElementById('feedback');

  if (userAnswer === currentAnswer) {
    feedback.textContent = '✅ ¡Correcto!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = `❌ Incorrecto. La respuesta era ${currentAnswer}`;
    feedback.style.color = 'red';
  }
}

generateProblem();
