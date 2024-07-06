// Increasing Number Triangle Pattern

// Input Format: N = 3
// Result:
// 1
// 2 3
// 4 5 6

// Input Format: N = 6
// Result:
// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21

const pattern13 = (n) => {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += `${num} `;
      num += 1;
    }
    console.log(line);
  }
};

pattern13(3);
console.log('\n=============================\n');
pattern13(6);
console.log('\n=============================\n');
pattern13(5);
