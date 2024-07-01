// Inverted Star Pyramid
// Input Format: N = 3
// Result:
// *****
//  ***
//   *
// Input Format: N = 6
// Result:
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

const pattern8 = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
      line += ' ';
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      line += '*';
    }
    for (let j = 0; j < i; j++) {
      line += ' ';
    }
    console.log(line);
  }
};

pattern8(3);
console.log('\n=============================\n');
pattern8(6);
