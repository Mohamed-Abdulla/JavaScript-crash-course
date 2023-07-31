//constructor functions -this and new keyword refers constructor function
//we use caps for constructor functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1); //use new -
//this create {} empty object.
//this is a reference to the object
//return that object from the function
another.draw();

//Functions are Objects
Circle.call({}, 1);
