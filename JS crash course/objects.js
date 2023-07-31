//objects in js
let student={
    first:'Abdulla',
    last:'abdulla',
    age:19,
    height:173,
    studentinfo:function(){
        return this.first+'\n'+this.last+'\n'+this.age} // functions inside objects
}
console.log(student.first);
console.log(student.first='Mohamed'); //change value to student
student.age++;// can increase age 
console.log(student.studentinfo());
