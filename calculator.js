// Funny Calculator JavaScript - Always returns HELLO WORLD!

let currentDisplay = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// Update display
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentDisplay;
}

// Append number to display
function appendNumber(number) {
    if (waitingForSecondOperand) {
        currentDisplay = number;
        waitingForSecondOperand = false;
    } else {
        currentDisplay = currentDisplay === '0' ? number : currentDisplay + number;
    }
    updateDisplay();
}

// Append operator
function appendOperator(nextOperator) {
    const inputValue = parseFloat(currentDisplay);

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        // Store but don't calculate yet
        const result = performCalculation(firstOperand, inputValue, operator);
        currentDisplay = String(result);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

// Perform calculation (but we'll override this later!)
function performCalculation(first, second, operator) {
    // This looks like it's doing math, but it's a trap!
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

// Clear display
function clearDisplay() {
    currentDisplay = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    
    const display = document.getElementById('display');
    display.classList.remove('rainbow-text');
    display.classList.remove('shake');
    
    updateDisplay();
}

// The main calculation function - THE TRICK IS HERE!
function calculate() {
    const inputValue = parseFloat(currentDisplay);
    const display = document.getElementById('display');

    if (firstOperand === null || operator === null) {
        // If they just press equals without an operation
        showHelloWorld();
        return;
    }

    // Pretend to calculate
    setTimeout(() => {
        // Add shake animation
        display.classList.add('shake');
        
        // After shake, show HELLO WORLD
        setTimeout(() => {
            showHelloWorld();
        }, 500);
    }, 100);
}

// Show the surprise result!
function showHelloWorld() {
    const display = document.getElementById('display');
    currentDisplay = 'HELLO WORLD';
    
    // Add rainbow animation
    display.classList.add('rainbow-text');
    
    // Reset calculator state
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    
    updateDisplay();
    
    // Play a fun alert after a moment
    setTimeout(() => {
        playConfetti();
    }, 500);
}

// Optional: Add confetti effect (simple version)
function playConfetti() {
    // Create simple confetti effect
    console.log('🎉 HELLO WORLD! 🎉');
    
    // You could add actual confetti here with a library
    // For now, just log to console for fun
}

// Keyboard support
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

// Initialize display
updateDisplay();

// Easter egg: log a message
console.log('🎮 Welcome to the Funny Calculator!');
console.log('💡 Hint: Try calculating anything... the answer might surprise you!');
console.log('🎉 Spoiler: The answer to everything is HELLO WORLD!');
