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

// Function to calculate the result
function calculateResult() {
    try {
        // Use JavaScript's eval() function to calculate the result
        // Note: eval() can be dangerous in some contexts, but for a simple calculator it's OK
        const result = eval(displayValue);
        
        // Update the display with the result
        displayValue = result.toString();
        document.getElementById('result').value = displayValue;
    } catch (error) {
        // Handle errors (like division by zero)
        document.getElementById('result').value = 'Error';
        displayValue = '';
    }
}

// Step 4: Refinements and additional features

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Handle number keys and operators
    if (/[0-9]/.test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    } 
    // Handle Enter key as equals
    else if (key === 'Enter') {
        calculateResult();
    } 
    // Handle Escape key as clear
    else if (key === 'Escape') {
        clearDisplay();
    }
    // Handle Backspace
    else if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1);
        document.getElementById('result').value = displayValue;
    }
});
