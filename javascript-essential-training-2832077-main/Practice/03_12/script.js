/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */


import Backpack from "./Backpack.js";
import Book from "./Book.js";

const myPack = new Backpack(
  "MGs Backpack",
  41,
  "black",
  12,
  35,
  35,
  false
);

console.log(myPack);

class CoffeeMaker {
    constructor(
        brandName,
        volume,
        color,
        lidOpen,
        isIcedCoffee,
        datePurchased
    ) {
        // Coffee maker props
        this.brandName = brandName;
        this.volume = volume;
        this.color = color;
        this.lidOpen = lidOpen;
        this.isIcedCoffee = isIcedCoffee;
        this.datePurchased = datePurchased;
    }
}

const newCoffePot = new CoffeeMaker(
    "StarBucks",
    "2 liters",
    "black",
    false,
    true,
    "1/24/2021"
);

console.log(newCoffePot);
console.log(newCoffePot.brandName);
console.log(newCoffePot.volume);

// books created from Book class

const harryPotterBook = new Book(
    "Harry and the Maniacs",
    "Fantasy",
    850,
    "123-8858-000-210",
    true,
    true
);
console.log(harryPotterBook);

const programmingBook = new Book(
    "The Pragmatic programmer",
    "Programming",
    355,
    "225-4554-89898-8989",
    true,
    false
)
console.log(programmingBook);