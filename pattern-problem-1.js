// Rectangular Star Pattern
/* Example 1:
Input: N = 3
 Output:
 * * *
 * * *
 * * *
* /

/* Example 2:
Input: N = 6
Output:
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
*/

const pattern1 = (n) => {
  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n; j++) {
      line += '*';
    }
    console.log(line);
  }
};

pattern1(3);
console.log('\n=============================\n');
pattern1(6);
