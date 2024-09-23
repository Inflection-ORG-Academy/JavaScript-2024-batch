//     * * * *
//     *     *
//     *     *
//     * * * *

const num = 7;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (j == 1 || j == num || i == 1 || i == num) {
      process.stdout.write('*');
      process.stdout.write(' ');
    } else {
      process.stdout.write('  ');
    }
  }
  process.stdout.write('\n');
}
// -------------------------------
//  N
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (j == 1 || j == i || j == num) {
      process.stdout.write('*');
      process.stdout.write(' ');
    } else {
      process.stdout.write('  ');
    }
  }
  process.stdout.write('\n');
}
// ----------------------------
//  | |
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (j == 1 || j == num) {
      process.stdout.write('*');
      process.stdout.write(' ');
    } else {
      process.stdout.write('  ');
    }
  }
  process.stdout.write('\n');
}
// ---------------------------------
//  \
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (j == i) {
      process.stdout.write('*');
      process.stdout.write(' ');
    } else {
      process.stdout.write('  ');
    }
  }
  process.stdout.write('\n');
}
// --------------------------------
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (j !== i) {
      process.stdout.write('*');
      process.stdout.write(' ');
    } else {
      process.stdout.write('  ');
    }
  }
  process.stdout.write('\n');
}
// ------------------------------------
// Z
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (j == num - i + 1 || i == 1 || i == num) {
      process.stdout.write('*');
      process.stdout.write(' ');
    } else {
      process.stdout.write('  ');
    }
  }
  process.stdout.write('\n');
}

// ------------------------------------

// G
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (
      i == num ||
      i == 1 ||
      (i == num - 2 && j == num - 1) ||
      j == 1 ||
      (i >= num - 2 && j == num)
    ) {
      process.stdout.write('*');
      process.stdout.write(' ');
    } else {
      process.stdout.write('  ');
    }
  }
  process.stdout.write('\n');
}
