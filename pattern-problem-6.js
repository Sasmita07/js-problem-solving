// Inverted Numbered Right Pyramid

// Input Format: N = 3
// Result:
// 1 2 3
// 1 2
// 1

// Input Format: N = 6
// Result:
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

const pattern6 = (n) => {
  for (let i = n; i > 0; i--) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += ` ${j}`;
    }
    console.log(line.trim());
  }
};

pattern6(3);
console.log('\n=============================\n');
pattern6(6);
