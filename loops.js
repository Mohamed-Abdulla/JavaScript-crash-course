//repeat this statement
//initialize,condition,increment
let i=1;
while(i<=5)
{
    console.log("hy");
    i++;
}
let o=10;
do  
{
    console.log("hio");
    o++;
}while(o<=5)

/*let j=5;
while(j>=1)
{
    console.log("hye");
    j--;
}*/

//for loop- 

/*for (i=1;i<=5;i++)
{
    console.log("hy",i);

    for(let j=1;j<=5;j++)               //nested for loop
    console.log("hello",j);
}*/
//use for loo[ when u know starting and ending value and also iterations, for loop is best]
/*for(let i=1;i<=100;i++)
{
    if(i%3===0)
    console.log(i);
}*/
// to get number seperate in reverse order in normal method
/*let num=123456

console.log(num%10);
num=parseInt(num/10)
console.log(num%10);
num=parseInt(num/10)
console.log(num%10);
num=parseInt(num/10)
console.log(num%10);
num=parseInt(num/10)
console.log(num%10);
num=parseInt(num/10)
console.log(num%10);
*/
//number seperate in reverse order using while loop- best
/*let num=422421
while(num>0)
{
    console.log(num%10);
    num=parseInt(num/10)

}*/
// print reverse in same line
num1=1234
let rev=0
while(num1>0)
{
    rev=rev*10+(num1%10)
    num1=parseInt(num1/10)
}
console.log(rev);

















