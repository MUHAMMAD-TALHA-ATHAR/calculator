function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var resultElement = document.getElementById("result");
    var errorElement = document.getElementById("error");

    // Check if the input is not empty
    if (num1 === '' || num2 === '') {
        errorElement.textContent = "Please enter both numbers.";
        resultElement.textContent = "";
        return;
    }

    // Convert the input values to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    // Check if the conversion resulted in valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = "Please enter valid numbers.";
        resultElement.textContent = "";
        return;
    }

    errorElement.textContent = "";

    var result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            resultElement.textContent = "Cannot divide by zero.";
            return;
        }
        result = num1 / num2;
    } else {
        errorElement.textContent = "Invalid operator.";
        return;
    }

    resultElement.textContent = "Result: " + result;
}
