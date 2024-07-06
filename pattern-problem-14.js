// Increasing Letter Triangle Pattern

// Input Format: N = 3
// Result:
// A
// A B
// A B C

// Input Format: N = 6
// Result:
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

const pattern14 = (n) => {
  // for (let i = 1; i <= n; i++) {
  //   let num = 'A'.charCodeAt();
  //   let line = '';
  //   for (let j = 1; j <= i; j++) {
  //     line += `${String.fromCharCode(num)} `;
  //     num += 1;
  //   }
  //   console.log(line);
  // }
  // Sol-2
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let ch = 'A'.charCodeAt(); ch <= 'A'.charCodeAt() + i; ch++) {
      line += `${String.fromCharCode(ch)} `;
    }
    console.log(line);
  }
};

pattern14(3);
console.log('\n=============================\n');
pattern14(6);
console.log('\n=============================\n');
pattern14(5);
