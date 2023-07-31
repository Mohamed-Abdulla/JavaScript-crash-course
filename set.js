//set-collection ofvalues,unique values,unorderedlist,doesnt have index value
//set is a class
let nums=new Set()
nums.add(2);
nums.add(2);nums.add(8);
nums.add(2);
nums.add(2);
nums.add(2);
nums.forEach(valye=>{  //iterate a set
    console.log(valye);
})

console.log(nums.has(2)); //has()-to check present or not