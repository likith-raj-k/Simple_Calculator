let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        if (isNaN(result) || !isFinite(result)) {
            document.getElementById('display').value = 'Error';
        } else {
            document.getElementById('display').value = result;
        }
        currentInput = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}