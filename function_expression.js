//expression-evaluate -assignment
//function expression /fn is a object, helping reducing lines of code
// let add = function (num1, num2) {
//   return num1 + num2;
// };
// let sum = add;
// let result = sum(1, 2);
// console.log(result);
class Solution {
  encode(str) {
    let des = "";
    for (let i = 0; i < str.length; i++) {
      des += str[i];
      let c = 1;
      while (i + 1 < str.length && str[i] == str[i + 1]) {
        c++;
        i++;
      }
      des += c + "";
    }
    return des;
  }
}
const s = new Solution();

console.log(s.encode("aaabbbccc"));
