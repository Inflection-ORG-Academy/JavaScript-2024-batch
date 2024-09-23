// Checking Given Number is a PRIME NUMBER or Not

const givenNum = 1;
let flag = 0;

if (givenNum == 0 || givenNum == 1) {
  flag = 1;
}

for (let i = 2; i <= givenNum / 2; i++) {
  if (givenNum % i == 0) {
    flag = 1;
    break;
  }
}

if (flag == 0) {
  console.log('Prime Number');
} else {
  console.log('Not Prime Number');
}

// Print all Prime Numbers of given numbers

const num = 100;
for (let i = 2; i <= num; i++) {
  let flag = 0;

  for (let j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  if (flag == 0) {
    console.log(i);
  }
}
