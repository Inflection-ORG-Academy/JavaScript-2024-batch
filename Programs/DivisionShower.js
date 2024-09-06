const obtainedMarks = 59;

if (obtainedMarks >= 60) {
  console.log('First Division');
} else if (obtainedMarks >= 50 && obtainedMarks <= 59.99) {
  console.log('Second Division');
} else if (obtainedMarks >= 33 && obtainedMarks <= 49.99) {
  console.log('Third Division');
} else {
  console.log('Failed');
}
