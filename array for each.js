//array for each
let nums=[34,56,77,44,56,88]
nums.forEach(n=>{ //for each is a function,you have to pass function inside()
    console.log(n+1);
}

)  
nums.forEach((n,i,nums)=>{ //for arrow fn,multiple parameter put ()
    console.log(n,i,nums); //print value,index,arrays -- this is sequence
}
)

//give value one by one

//console.log(nums);
