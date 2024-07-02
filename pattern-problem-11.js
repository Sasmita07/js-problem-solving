// Binary Number Triangle Pattern

// Input Format: N = 3
// Result:
// 1
// 01
// 101

// Input Format: N = 6
// Result:
// 1
// 01
// 101
// 0101
// 10101
// 010101

const pattern11 = (n) => {
  for (let i = 0; i < n; i++) {
    let start = i % 2 === 0 ? 1 : 0;
    let line = '';
    for (let j = 0; j <= i; j++) {
      line += start;
      start = 1 - start;
    }
    console.log(line);
  }
};

pattern11(3);
console.log('\n=============================\n');
pattern11(6);
console.log('\n=============================\n');
pattern11(5);
