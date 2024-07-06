// Reverse Letter Triangle Pattern

// Input Format: N = 3
// Result:
// A B C
// A B
// A

// Input Format: N = 6
// Result:
// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A

const pattern15 = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (
      let ch = 'A'.charCodeAt();
      ch <= 'A'.charCodeAt() + (n - i - 1);
      ch++
    ) {
      line += `${String.fromCharCode(ch)} `;
    }
    console.log(line);
  }
};

pattern15(3);
console.log('\n=============================\n');
pattern15(6);
console.log('\n=============================\n');
pattern15(5);
