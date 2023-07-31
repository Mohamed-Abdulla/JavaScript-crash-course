//add function+object
//what u know with help of variables and what u do with the help of functions=method

let laptop = {
  cpu: "i9",
  ram: 16,
  brand: "mac",

  getconfig: function () {
    //method
    console.log(this.cpu);
  },
};
laptop.getconfig();

//add function+object
//what u know with help of variables and what u do with the help of functions=method

let laptop1 = {
  cpu: "i5",
  ram: 16,
  brand: "mac",

  getconfig: function () {
    //method
    console.log(laptop.cpu);
  },
};
laptop1.getconfig();
