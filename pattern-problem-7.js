// Given an integer N, print the following pattern :
// Input Format: N = 3
// Result:
//   *
//  ***
// *****
// Input Format: N = 6
// Result:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const pattern7 = (n) => {
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
};

pattern7(3);
console.log('\n=============================\n');
pattern7(6);
