const sentence = "hello there from lighthouse labs";

let count = 0;
// print the char here
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count);
  count += 50;
}

setTimeout(() => {
  console.log();
}, count);