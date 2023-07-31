//factorial
//5!=5*4*3*2*1=120
//n!=n*(n-1)*(n-2)*(n-3)....(n-n)=0
//0!=120

// function fact(n){
//     if(n==0)
//     return 1
//     else
//     return n* fact(n-1);
// }
// let num=5
// let result=fact(num)
// console.log(result);

function fact(n) {
  if (n == 0) return 1; //basecase
  else return n * fact(n - 1); //prograssive func
}
let n = 5;
console.log(fact(n));
