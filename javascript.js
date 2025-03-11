function calculate(operation) {
    // Retrieve and parse input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerText = "Please enter valid numbers in both fields.";
      return;
    }

    // Perform the selected operation
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          document.getElementById('result').innerText = "Division by zero is not allowed.";
          return;
        }
        result = num1 / num2;
        break;
      default:
        result = "Unknown operation";
    }
    
    // Display the result
    document.getElementById('result').innerText = "Result: " + result;
  }