//filter in for each method

let nums=[34,56,77,44,56,88]
//print only even values

let result =nums.filter(n=>n%2===0)//filter filters based on condition and collects all values and return as array itself 
    .map(n=>n*2)//it takes value &change value
    //what if i want sum of all multiplied values
    .reduce((a,b)=>a+b)//reduce reduced values to single whole value
    console.log(result);
    //google abt map reduce


    /*.forEach(n=>{ //print all filtered values // we dont ant for each for reducing values bcz reduce gives only one values
    console.log(n)
})*/