//map - can have values but their need not be a number.it may be string,object,etc
//map-its a key and its valuepair.it becomes powerful to store data and to works with data that
//map is class

let map =new Map(); // create a map
map.set('abd','js',); //to assign/updating values (key/pair)
map.set('abdulla','java',); 
map.set('mohamed','python',); 
map.set('abd','react') // this replaces js with react becoz, set fn set value, to add use add fn
//what all do with map 

console.log(map.keys()); // to print keys
console.log(map.has('abd')) // to check particular key is there?
console.log(map.get('abd')); //to print  particular key values

for(let[k,v]/* ->2 parameter*/of map){  //to print all key & values pair 
    console.log(k,v);
}
// when we iterate with foreach loop
map.forEach((v,k)=>{ //we should give value then key
    console.log(v,':',k);
}
)
//map & objects is similiar, it used based on requirements eg: one object(remote-brand:lg) and 
//collections eg(names:,tech)