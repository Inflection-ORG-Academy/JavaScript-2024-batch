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
