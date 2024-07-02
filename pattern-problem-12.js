// Number Crown Pattern

// Input Format: N = 3
// Result:
// 1    1
// 12  21
// 123321

// Input Format: N = 6
// Result:
// 1          1
// 12        21
// 12       321
// 1234    4321
// 12345  54321
// 123456654321

const pattern12 = (n) => {
  let space = 2 * (n - 1);

  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    for (let j = 1; j <= space; j++) {
      line += ' ';
    }
    for (let j = i; j >= 1; j--) {
      line += j;
    }
    space -= 2;
    console.log(line);
  }
};

pattern12(3);
console.log('\n=============================\n');
pattern12(6);
console.log('\n=============================\n');
pattern12(5);
