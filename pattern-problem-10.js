// Diamond Half Diamond Star Pattern

// Input Format: N = 3
// Result:
//   *
//   **
//   ***
//   **
//   *
// Input Format: N = 6
// Result:
//      *
//      **
//      ***
//      ****
//      *****
//      ******
//      *****
//      ****
//      ***
//      **
//      *

const pattern10 = (n) => {
  // for (let i = 0; i < n; i++) {
  //   let line = '';
  //   for (let j = 0; j < i + 1; j++) {
  //     line += '*';
  //   }
  //   console.log(line);
  // }
  // for (let i = 1; i < n; i++) {
  //   let line = '';
  //   for (let j = i; j < n; j++) {
  //     line += '*';
  //   }
  //   console.log(line);
  // }

  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;
    let line = '';
    if (i > n) {
      stars = 2 * n - i;
      line = '';
    }

    for (let j = 1; j <= stars; j++) {
      line += '*';
    }
    console.log(line);
  }
};

pattern10(3);
console.log('\n=============================\n');
pattern10(6);
console.log('\n=============================\n');
pattern10(5);
