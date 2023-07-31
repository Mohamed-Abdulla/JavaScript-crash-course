//for in loop -- to print key  line by line 
let alien={
    name:'Abd',
    tech:"JS", //comma in end of properties is fine to may add or delete any in future
    laptop:{
        cpu:'i7',
        ram:4,
        brand:'mac'
    }
}
/*
for(let key in alien)
{
    console.log(key,alien[key]);
}*/

//assignment 
for(let key in alien.laptop)
{
    console.log(key,alien.laptop[key]);
}



//console.log(alien);