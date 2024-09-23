// Global (Basic) Function define

function fname(parameter1, parameter2, parameter3) {
  // statements
  const sum = parameter1 + parameter2 + parameter3;
  console.log(sum);
}

// Function Execution
fname(2, 3, 4);

// ------------------ Arrow Function ---------------------------

// Arrow Function
const printTable = () => {
  // Statements
};

printTable();

// ifi/Self invoked  Function
(function dprint() {
  // Statements
});

// Closure Function

function closureFn() {
  // Statements
  return function demo() {
    // Statements
  };
}

closureFn();

const closureFun = () => {
  // Statements
  return function demo() {
    // Statements
  };
};
