n = 4;
let op9 = "";
for (let i = 1; i <= 2 * n; i++) {
  let c = i > n ? 2 * n - i : i;
  for (let s = 1; s <= n - c; s++) {
    op9 += "  ";
  }
  for (let j = c; j >= 1; j--) {
    op9 += j + " ";
  }
  for (let j = 2; j <= c; j++) {
    op9 += j + " ";
  }

  op9 += "\n";
}
console.log(op9);

n = 5;
let op10 = "";
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    op10 += "  ";
  }
  for (let j = i; j >= 1; j--) {
    op10 += j + " ";
  }
  for (let j = 2; j <= i; j++) {
    op10 += j + " ";
  }

  op10 += "\n";
}
console.log(op10);

n = 5;
let op11 = "";
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    op11 += "  ";
  }
  for (let j = i; j >= 1; j--) {
    op11 += "*" + " ";
  }
  for (let j = 2; j <= i; j++) {
    op11 += "*" + " ";
  }

  op11 += "\n";
}
console.log(op11);

function pattern(n) {
  let N = n;
  n = 2 * n;
  let output = "";
  for (let row = 0; row <= n; row++) {
    for (let col = 0; col <= n; col++) {
      let atEveryIndex =
        N - Math.min(Math.min(row, col), Math.min(n - row, n - col));
      output += atEveryIndex + " ";
    }
    output += "\n";
  }
  console.log(output);
}
pattern(4);
