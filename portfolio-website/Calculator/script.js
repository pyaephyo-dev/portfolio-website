const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let previousInput = '';
let operator = '';

function updateDisplay(value) {
  display.textContent = value;

  if (parseFloat(value) < 0) {
    display.style.color = '#f87171'; // red
  } else if (parseFloat(value) > 0) {
    display.style.color = '#4ade80'; // green
  } else {
    display.style.color = '#e6eef8'; // default
  }

  display.style.opacity = 0;
  setTimeout(() => {
    display.style.opacity = 1;
  }, 50);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (!isNaN(value) || value === '.') {
      // Number or decimal
      if (value === '.' && currentInput.includes('.')) return;
      currentInput += value;
      updateDisplay(currentInput);
    } else if (button.id === 'clear') {
      currentInput = '';
      previousInput = '';
      operator = '';
      updateDisplay('0');
    } else if (button.id === 'equals') {
      if (currentInput && previousInput && operator) {
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);
        let result;

        switch (operator) {
          case '+': result = prev + curr; break;
          case '-': result = prev - curr; break;
          case '*': result = prev * curr; break;
          case '/': result = prev / curr; break;
        }

        result = parseFloat(result.toFixed(6));
        currentInput = result.toString();
        previousInput = '';
        operator = '';
        updateDisplay(result);
      }
    } else if (button.classList.contains('operator')) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    }
  });
});
