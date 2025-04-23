let displayValue = '';

// Function to append numbers and operators to the display
function appendToDisplay(value) {
    // Prevent multiple operators in a row
    const lastChar = displayValue[displayValue.length - 1];
    const operators = ['+', '-', '*', '/'];
    
    // Check if the last character and current value are both operators
    if (operators.includes(lastChar) && operators.includes(value)) {
        // Replace the previous operator
        displayValue = displayValue.slice(0, -1) + value;
    } else {
        // Append the value to the display
        displayValue += value;
    }
    
    // Update the display
    document.getElementById('result').value = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}
