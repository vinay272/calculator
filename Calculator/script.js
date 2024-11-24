let result = document.getElementById("result");

// Function to append value to the display
function appendValue(value) {
    result.value += value;
}

// Function to clear the display
function clearResult() {
    result.value = "";
}

// Function to calculate the result
function calculateResult() {
    try {
        result.value = eval(result.value); // Use eval to evaluate the expression
    } catch (error)
     {
        result.value = "Error"; // Handle invalid expressions
    }
}
