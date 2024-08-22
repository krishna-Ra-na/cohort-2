/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  add(number) {
    this.result += number;
    return this;
  }
  subtract(number) {
    this.result -= number;
    return this;
  }

  multiply(number) {
    this.result *= number;
    return this;
  }
  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero.");
    }
    this.result /= number;
    return this; // To allow method chaining
  }

  clear() {
    this.result = 0;
    return this; // To allow method chaining
  }
  // get results
  getResult() {
    return this.result;
  }
  // Method to calculate an arithmetic expression
  calculate(expression) {
    // Remove all whitespace from the expression
    expression = expression.replace(/\s+/g, "");

    // Check if the expression contains any invalid characters
    if (!/^[\d+\-*/().]+$/.test(expression)) {
      throw new Error("Invalid characters in the expression.");
    }

    // Check for division by zero before evaluating the expression
    if (/\/0/.test(expression)) {
      throw new Error("Division by zero is not allowed.");
    }

    // Evaluate the expression
    try {
      this.result = eval(expression); // Warning: eval can be dangerous if not handled carefully
    } catch (error) {
      throw new Error("Error in evaluating the expression.");
    }

    return this.result;
  }
}

const calculator = new Calculator();
console.log(calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7")); // should return 19
console.log(calculator.calculate("100 / 2 + 3 * 4 - 5")); // should return 49.5

module.exports = Calculator;
