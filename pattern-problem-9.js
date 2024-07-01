// Diamond Star Pattern

// Input Format: N = 3
// Result:
//   *
//  ***
// *****
// *****
//  ***
//   *
// Input Format: N = 6
// Result:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

const pattern9 = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n - i; j++) {
      line += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      line += '*';
    }
    for (let j = 0; j < n - i; j++) {
      line += ' ';
    }
    console.log(line);
  }
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < i + 1; j++) {
      line += ' ';
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      line += '*';
    }
    for (let j = 0; j < i + 1; j++) {
      line += ' ';
    }
    console.log(line);
  }
};

pattern9(3);
console.log('\n=============================\n');
pattern9(6);
console.log('\n=============================\n');
pattern9(5);
