// Right-Angled Number Pyramid - II

// Input Format: N = 3
// Result:
// 1
// 2 2
// 3 3 3

// Input Format: N = 6
// Result:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

const pattern4 = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line = `${line} ${i}`;
    }
    console.log(line.trim());
  }
};

pattern4(3);
console.log('\n=============================\n');
pattern4(6);
