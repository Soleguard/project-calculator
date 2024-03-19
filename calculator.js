// Declare and initialize Numbers 1 and 2, operator used, and solution
let number_1 = '';
let number_2 = '';
let operator_Used = '';
let solution = 0;

// Declare and initialize counter for operations on numbers by themselves (e.g. '2**' = 2 * 2) and tracker for current number that user is on
let operator_Counter = 1;
let current_Number = 1;

// Declare constant for error message of division by 0
const DIVISION_ERROR = 'Error: Cannot divide by 0';

// Select display screen and equals, clear, digit, and sign buttons
const SCREEN = document.getElementById("screen");
const EQUALS = document.getElementById("equals");
const CLEAR = document.getElementById("clear");
const DIGITS = document.querySelectorAll(".digit");
const SIGNS = document.querySelectorAll(".sign");

// Loop through each digit button, adding a click event listener
DIGITS.forEach(function(digit) {
  
  // Invoke function upon digit click
  digit.addEventListener("click", function() {
    
    // Reset operator counter
    operator_Counter = 1;
    
    // Process for Number 1
    if (current_Number === 1) {
      // Append digit to Number 1
      number_1 = number_1 + digit.innerHTML;
      // Display current input
      SCREEN.innerHTML = number_1;
    }
    
    // Process for Number 2
    else if (current_Number === 2) {
      // Append digit to Number 2
      number_2 = number_2 + digit.innerHTML;
      // Display current input
      SCREEN.innerHTML = number_2;
    }
    
  });
});

// Loop through each sign button, adding a click event listener
SIGNS.forEach(function(sign) {
  
  // Invoke function upon click
  sign.addEventListener("click", function() {
    
    // Process for successive operator inputs
    if (operator_Counter === 2) {
      
      // Prevent division by 0
      if (DIVISION_BY_0(operator_Used, Number(number_2))) {
        // Exit function
        return;
      }
      
      // Evaluate number by itself
      solution = OPERATE(number_1, number_1, operator_Used);
      // Display solution
      SCREEN.innerHTML = solution;
      // Assign solution to Number 1 for next pair
      number_1 = solution;
      // Retrieve operator
      operator_Used = sign.innerHTML;
      
      // Exit function
      return;
      
    }
    
    // Process for Number 1 after clicking operator
    if (current_Number === 1) {
      
      // Retrieve operator
      operator_Used = sign.innerHTML;
      // Increment counter
      operator_Counter = 2;
      // Increment current number
      current_Number = 2;
      
    }
    
    // Process for Number 2 after clicking operator
    else if (current_Number === 2) {
      
      // Prevent division by 0
      if (DIVISION_BY_0(operator_Used, Number(number_2))) {
        // Exit function
        return;
      }
      
      // Evaluate previous pair
      solution = OPERATE(number_1, number_2, operator_Used);
      // Display solution
      SCREEN.innerHTML = solution;
      // Assign solution to Number 1 for next pair
      number_1 = solution;
      
      // Reset Number 2
      number_2 = '';
      // Retrieve operator
      operator_Used = sign.innerHTML;
      
    }

  });
});

// Declare function for divisions by 0
const DIVISION_BY_0 = function(operator, denominator) {
  
  // Determine erroneous condition
  if (operator == '/' && denominator === 0) {
    // Display error message
    SCREEN.innerHTML = DIVISION_ERROR;
    // Reset denominator (allows user to select a different number by which to divide)
    denominator = '';
    
    // Return true
    return true;
  }
  
  // Process for non-zero denominators
  else {
    // Return false
    return false;
  }
  
};

// Create event listener for equals button
EQUALS.addEventListener("click", function() {
  
  // Prevent calculations with incomplete information
  if (number_1 == '' || number_2 == '' || operator_Used == '') {
    return;
  }
  
  // Process for valid input
  else {
    
    // Prevent division by 0
    if (DIVISION_BY_0(operator_Used, Number(number_2))) {
      // Exit function
      return;
    }
    
    // Evaluate Numbers 1 and 2, rounding result to nearest integer
    solution = ROUND(OPERATE(number_1, number_2, operator_Used));

    // Assign solution to Number 1 for next pair
    number_1 = solution;

    // Reset Number 2 and counter; set current number to 2
    number_2 = '';
    operator_Counter = 1;
    current_Number = 2;
  }
  
  // Display solution
  SCREEN.innerHTML = solution;
  
});

// Invoke clear upon click
CLEAR.addEventListener("click", function() {
  
  // Reset input, trackers, and solution
  number_1 = '';
  number_2 = '';
  operator_Used = '';
  operator_Counter = 1;
  current_Number = 1;
  solution = 0;
  
  // Clear display
  SCREEN.innerHTML = '';
  
});

// Declare round function
const ROUND = function(num) {
  return Number(num.toFixed(9));
};

// Declare add function
const ADD = function(num_1, num_2) {
  return num_1 + num_2;
};
  
// Declare subtract function
const SUBTRACT = function(num_1, num_2) {
  return num_1 - num_2;
};
  
// Declare multiply function
const MULTIPLY = function(num_1, num_2) {
  return num_1 * num_2;
};
  
// Declare divide function
const DIVIDE = function(num_1, num_2) {
  return num_1 / num_2;
};
  
// Declare operate function
const OPERATE = function(num_1, num_2, operator) {
  
  // Convert input to numbers
  num_1 = Number(num_1);
  num_2 = Number(num_2);
  
  // Determine addition
  if (operator == "+") {
    return ADD(num_1, num_2);
  }

  // Determine subtraction
  else if (operator == "-") {
    return SUBTRACT(num_1, num_2);
  }

  // Determine multiplication
  else if (operator == "*") {
    return MULTIPLY(num_1, num_2);
  }

  // Determine division
  else if (operator == "/") {
    return DIVIDE(num_1, num_2);
  }
  
};