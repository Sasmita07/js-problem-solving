// Input Format: N = 3
// Result:
// 1
// 1 2
// 1 2 3

// Input Format: N = 6
// Result:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

const pattern3 = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line = `${line} ${j}`;
    }
    console.log(line.trim());
  }
};

pattern3(3);
console.log('\n=============================\n');
pattern3(6);
