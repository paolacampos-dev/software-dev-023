//Basics of OOP

//Building block --> objects

//The main way is to create a class
//A class is a template that we will use to instantiate objects
//by convention, class names are capitalised

class Biscuit {
  //the constructor is a function that will contain the instructions to build objects based on this class
  constructor(biscuitName, biscuitCrunchiness, biscuitFlavour) {
    // here we set up the object properties
    //the this keyword creates a context for each instance of the class Biscuit
    //once we create the new instances, this will refer to a specific instance and will make our class and methods reusable
    ((this.naming = biscuitName),
      (this.crunchiness = biscuitCrunchiness),
      (this.flavour = biscuitFlavour));
  }
  //apart from properties, our class can also have methods
  voiceline() {
    console.log(
      `The ${this.naming} has an amazing ${this.flavour} flavour, and a crunchiness of ${this.crunchiness}`,
    );
  }
}

//instantiate new objects
//custard cream
const custardCream = new Biscuit("custard cream", 5, "vanilla");
console.log(custardCream);
//bourbon
const bourbon = new Biscuit("bourbon", 4, "chocolate");
console.log(bourbon.naming);

console.log(bourbon.voiceline());
console.log(custardCream.voiceline());

//this is a sub-class --> a class that inherits properties from another class
//extends creates a relationship between Cookie and Biscuit --> Cookie has access to the Biscuit properties and methods now
class Cookie extends Biscuit {
  constructor(cookieName, cookieCrunchiness, cookieFlavour, cookiePrice) {
    //the super operator reuses the properties declared in the parent class above
    super(cookieName, cookieCrunchiness, cookieFlavour);
    this.price = cookiePrice;
  }
  slogan() {
    console.log(`${this.naming} is the best cookie in the world!`);
  }
}

const chocolateChip = new Cookie("chocolate chip", 4, "chocolate", 3);
console.log(chocolateChip);
console.log(chocolateChip.slogan());
console.log(chocolateChip.voiceline());
