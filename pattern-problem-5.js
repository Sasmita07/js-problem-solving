// Inverted Right Pyramid

// Input Format: N = 3
// Result:
// * * *
// * *
// *

// Input Format: N = 6
// Result:
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

const pattern5 = (n) => {
  for (let i = n; i > 0; i--) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '* ';
    }
    console.log(line.trim());
  }
};

pattern5(3);
console.log('\n=============================\n');
pattern5(6);
