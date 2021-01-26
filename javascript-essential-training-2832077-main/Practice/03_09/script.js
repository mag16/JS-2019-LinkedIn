/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newBackpackName: function (newName) {
    this.name = newName;
  },
  newVolume: function (newVol) {
    this.volume = newVol;
  },
  colorChange: function (newCol) {
    this.color = newCol;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// backpack name change
console.log(backpack.name);
backpack.newBackpackName("MarcoG's new backpack");
console.log("name property changed to: ", backpack.name)

// volume change
console.log(backpack.volume);
backpack.newVolume(55);
console.log("new volume now is: ", backpack.volume);

// color change
console.log(backpack.color);
backpack.colorChange("black");
console.log("new backpack color is: ", backpack.color);

console.log(backpack);
