let nums=[];
nums[0]=5 //5-start value range from 0 to 99
nums[99]=9 //9-end value 
console.log(nums);
/*for(let n of nums){ //for of used to print/fetch all value one by one,here direct fetch happens
    console.log(n);
}*/
for (let key in nums){ //to print key,then we fetch /print
    console.log(key); 
}
for (let key in nums){ //to print values
    console.log(nums[key]); 
}