// Declare add function
const add = function(num_1, num_2) {
    return num_1 + num_2;
  };
  
  // Declare subtract function
  const subtract = function(num_1, num_2) {
    return num_1 - num_2;
  };
  
  // Declare multiply function
  const multiply = function(num_1, num_2) {
    return num_1 * num_2;
  };
  
  // Declare divide function
  const divide = function(num_1, num_2) {
    return num_1 / num_2;
  };
  
  // Declare operate function
  const operate = function(num_1, num_2, operator) {
    // Determine addition
    if (operator === "+") {
      return add(num_1, num_2);
    }
    
    // Determine subtraction
    else if (operator === "-") {
      return subtract(num_1, num_2);
    }
    
    // Determine multiplication
    else if (operator === "*") {
      return multiply(num_1, num_2);
    }
    
    // Determine division
    else if (operator === "/") {
      return divide(num_1, num_2);
    }
  };