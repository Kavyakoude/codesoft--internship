let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        currentInput = '';
    }
    operator = op;
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function calculateResult() {
    if (operator === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result = 0;
    
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand !== 0) {
                result = firstOperand / secondOperand;
            } else {
                result = 'Error';
            }
            break;
    }
    
    currentInput = result.toString();
    operator = null;
    firstOperand = null;
    updateDisplay();
}

