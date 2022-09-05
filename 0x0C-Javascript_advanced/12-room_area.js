/* Create an object named roomDimensions with the following three attributes:

width: 50
length: 100
getArea: function that returns the surface area of a the object using the width and length
Create a variable named boundGetArea, that will bind the object roomDimensions to the getArea function */


let roomDimensions = {
  width: 50,
  length: 100,
  getArea() {
    return this.width * this.length;
  }
}

let boundGetArea = getArea.bind(roomDimensions);
