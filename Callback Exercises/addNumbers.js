const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    return completionCallback(sum);
  }
  reader.question('Enter a number', (res) => {
    let x = parseInt(res);
    sum = sum + x;
    console.log(sum);
    return addNumbers(sum, numsLeft - 1, completionCallback);
  });
}


addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
