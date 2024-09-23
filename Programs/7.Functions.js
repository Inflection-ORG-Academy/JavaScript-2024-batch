function multiply(num1, num2) {
  console.log(num1 * num2);
}
multiply(5, 5);

// Addtion Using Function
function addition(x, y) {
  return x + y;
}

let a = addition(5, 215);
let b = addition(10.01, 0.1);
// ----------------------------------
// Print Table Using Function
function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}
printTable(5);
// ------------------------------------------------
// Print All Even Numbers of given Number
function evenNumbers(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(i + ' Even');
    }
  }
}

evenNumbers(100);

// -------------------------------
function squareStarPattern(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (i === 1 || i === num || j === 1 || j === num) {
        process.stdout.write('*');
        process.stdout.write(' ');
      } else {
        process.stdout.write('  ');
      }
    }
    process.stdout.write('\n');
  }
}

squareStarPattern(4);
squareStarPattern(10);
squareStarPattern(15);
squareStarPattern(20);
