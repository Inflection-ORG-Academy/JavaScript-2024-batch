const students = [
  { stdName: 'Pradeep Maurya', class: 12, sec: 'C' },
  { stdName: 'Ashvani', class: 12, sec: 'A' },
  { stdName: 'Monika', class: 10, sec: 'A' },
  { stdName: 'Soni', class: 9, sec: 'B' },
  { stdName: 'Muskan', class: 12, sec: 'A' },
  { stdName: 'Neha', class: 12, sec: 'B' },
  { stdName: 'Pushpa', class: 12, sec: 'C' },
  { stdName: 'Vandana', class: 11, sec: 'A' },
  { stdName: 'Nandini', class: 12, sec: 'C' },
];

function filterStd(stdArray, cls, sec) {
  const only12 = [];

  for (let i = 0; i < stdArray.length; i++) {
    if (stdArray[i].class == cls && stdArray[i].sec === sec) {
      only12.push(stdArray[i]);
    }
  }
  return only12;
}

console.log(filterStd(students, 12, 'B'));
console.log(filterStd(students, 11, 'B'));
