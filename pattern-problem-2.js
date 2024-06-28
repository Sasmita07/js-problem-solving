// Input Format: N = 3
// Result:
// *
// * *
// * * *

// Input Format: N = 6
// Result:
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

const pattern2 = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += '* ';
    }
    console.log(line.trim());
  }
};

pattern2(3);
console.log('\n=============================\n');
pattern2(6);
