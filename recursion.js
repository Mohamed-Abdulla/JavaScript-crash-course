//recursion
//stack-lastin first out -order call stack
let num=1
function show(){
    console.log('hi',num);// this num printed to find maximum stack space.
    num++;
    show() //when we call fn itself,it repeats as endless loop untill stack memory is full.this is called recursion
}
show() //when we call this show ,it passes to frst line show then it executes 2nd line log
//recursion used is json and factorial 