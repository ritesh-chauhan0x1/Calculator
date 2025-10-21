let currentDisplay = '0';
let fullExpression = '';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = fullExpression || currentDisplay;
}

function appendNumber(number) {
    if (waitingForSecondOperand) {
        currentDisplay = number;
        fullExpression += number;
        waitingForSecondOperand = false;
    } else {
        if (currentDisplay === '0' && number !== '.') {
            currentDisplay = number;
            fullExpression = number;
        } else {
            currentDisplay = currentDisplay + number;
            fullExpression += number;
        }
    }
    updateDisplay();
}

function appendOperator(nextOperator) {
    const inputValue = parseFloat(currentDisplay);

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation(firstOperand, inputValue, operator);
        currentDisplay = String(result);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    
    fullExpression += ' ' + nextOperator + ' ';
    updateDisplay();
}

function performCalculation(first, second, operator) {
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            return second;
    }
}

function clearDisplay() {
    currentDisplay = '0';
    fullExpression = '';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    
    const display = document.getElementById('display');
    display.classList.remove('rainbow-text');
    display.classList.remove('shake');
    
    updateDisplay();
}

function calculate() {
    const inputValue = parseFloat(currentDisplay);
    const display = document.getElementById('display');

    if (firstOperand === null || operator === null) {
        showHelloWorld();
        return;
    }

    showHelloWorld();
}

function showHelloWorld() {
    const display = document.getElementById('display');
    fullExpression = 'HELLO WORLD';
    currentDisplay = 'HELLO WORLD';
    
    display.classList.add('rainbow-text');
    
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    
    updateDisplay();
    
    setTimeout(() => {
        playConfetti();
    }, 500);
}

function playConfetti() {
    console.log('🎉 HELLO WORLD! 🎉');
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    }
});

updateDisplay();
