// Define an Object

const student = {
  fname: 'Shyam', //key : Value
  sirName: 'Varma',
  age: 25,
  gender: 'Male',
  className: 12,
  isPaid: false,
};

console.log(student);

// Read Object Value
console.log(student.age);
console.log(student['age']);

// change Object Value
student.fname = 'Ram';
console.log(student);

const person = student;
person.sirName = 'Maurya';
console.log(person);
console.log(student);

// Checking Day By Number
function checkDay(num) {
  if (num < 1 || num > 7) {
    console.log('Provide Valid Number');
    return;
  }

  const days = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  };

  console.log(days[num]);
}

checkDay(7);
