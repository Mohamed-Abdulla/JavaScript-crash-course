//complex object
let alien = {
  name: "Abd",
  tech: "JS", //comma in end of properties is fine to may add or delete any in future
  laptop: {
    cpu: "i7",
    ram: 4,
    brand: "mac",
  },
};

console.log(alien.laptop.brand.length);
delete alien.laptop;
console.log(alien);
//console.log(alien.laptop?.brand?.length); //? used to avoid error-if brand not available,dont go for length
