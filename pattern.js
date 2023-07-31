n = 5;
output = "";
for (row = 1; row <= n; row++) {
  for (column = 1; column <= row; column++) {
    output += "*";
  }
  output += "\n";
}
console.log(output);

n = 5;
output1 = "";
for (row = 1; row <= n; row++) {
  for (column = 1; column <= n; column++) {
    output1 += "*";
  }
  output1 += "\n";
}
console.log(output1);

n = 5;
output2 = "";
for (row = 1; row <= n; row++) {
  for (column = 1; column <= n - row + 1; column++) {
    output2 += "*";
  }
  output2 += "\n";
}
console.log(output2);

n = 5;
output3 = "";
for (row = 1; row <= n; row++) {
  for (column = 1; column <= row; column++) {
    output3 += column;
  }
  output3 += "\n";
}
console.log(output3);

n = 5;
output4 = "";
for (row = 1; row <= 2 * n; row++) {
  total = row > n ? 2 * n - row : row;
  for (column = 1; column <= total; column++) {
    output4 += "* ";
  }
  output4 += "\n";
}
console.log(output4);

n = 5;
let op5 = "";
for (let row = 1; row <= 2 * n; row++) {
  var totalColumnsinrow = row > n ? 2 * n - row : row;
  var spaces = n - totalColumnsinrow;
  for (let s = 1; s <= spaces; s++) {
    op5 += " ";
  }
  for (let column = 1; column <= totalColumnsinrow; column++) {
    op5 += "* ";
  }
  op5 += "\n";
}
console.log(op5);

n = 5;
let op6 = "";
for (let i = 1; i <= n; i++) {
  spaces = n - i;
  for (let j = 1; j <= spaces; j++) {
    op6 += " ";
  }

  for (let k = 1; k <= i; k++) {
    op6 += "*";
  }
  op6 += "\n";
}
console.log(op6);

n = 5;
let op7 = "";
for (let i = 1; i <= n; i++) {
  spaces = n - n - i;
  for (let j = 1; j <= spaces; j++) {
    op7 += " ";
  }

  for (let k = 1; k <= n - i + 1; k++) {
    op7 += "*";
  }
  op7 += "\n";
}
console.log(op7);

n = 5;
let op8 = "";
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= n - i; k++) {
    op8 += "  ";
  }
  for (let j = i; j >= 1; j--) {
    op8 += "*" + " ";
  }
  for (let j = 2; j <= i; j++) {
    op8 += "*" + " ";
  }

  op8 += "\n";
}
console.log(op8);
