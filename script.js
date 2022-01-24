"use strict";

///////////////////////////////////////////////
// * Constructor Functions and the new Operator

// const Person = function (firstName, birthYear) {
// Instance properties
// this.firstName = firstName;
// this.birthYear = birthYear;
// Never do this!
// this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
//   };

//   const jonas = new Person('Jonas', 1991);
//   console.log(jonas);

// ? Process of creating a new object

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//   const matilda = new Person('Matilda', 2017);
//   const jack = new Person('Jack', 1975);
//   console.log(jonas instanceof Person);

//   Person.hey = function () {
//     console.log('Hey there 👋');
//     console.log(this);
//   };
//   Person.hey();

///////////////////////////////////////
// * Prototypes
// - Prototypes are the mechanism by which JavaScript objects inherit features from one another.

// ? The prototype chain

// - Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.
// - Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.

// - When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.

// - The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.

// - The prototype property is NOT enumerable, so it is not accessible from a for...in loop.
// - The prototype property is NOT configurable, so it is not possible to change it, or delete it.
// - The prototype property is NOT writable, so it is not possible to reassign it.
// - The prototype property is NOT a regular property, it is a special kind of property.

// const Person = function (firstName, birthYear) {
// Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(Person.prototype);

///////////////////////////////////////////////////
// * Prototypal Inheritance and the Prototype Chain

// const zee = new Person('Zee', 2001);
// zee.calcAge();

// console.log(zee);
// - From we can see that, in the zee object, we did not have a calcAge function. But we can access it by using the prototypel chain(inheritance).

// console.log(zee.__proto__);

// console.log(zee.__proto__ === Person.prototype); // true

// console.log(Object.getPrototypeOf(Person));
// console.log(Person.prototype);
// console.log(Object.getPrototypeOf(zee));

// ! Remember : The `Person.prototype` is not the prototype of the Person object, But instead, it is (Person Constructor Function Prototype) what's gonna be used as the prototype of all the objects, that are created with the person constructor function. And Person.prototype itself actually also has a reference back to Peroson which is the constructor property(Person.prototype.constructor). Person.prototype.constructor is the reference to the constructor function itself.

// Some Checks
// console.log(Object.getPrototypeOf(Person) === Function.prototype);
// console.log(zee.__proto__ === Person.prototype);
// console.log(Object.getPrototypeOf(zee) === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(zee));
// console.log(Person.prototype.isPrototypeOf(Person));

// - We can also set properties on the prototype of an object.

// Person.prototype.species = 'Homo Sapiens';
// console.log(zee.species);

// console.log(zee.hasOwnProperty('firstName'));
// console.log(zee.hasOwnProperty('species'));

// ! Remember Again - Person.prototype is actually not the prototype of person, but of all the objects that are created through the person constructor function.

// - This whole process works the same in the constructor functions as well as in the classes. But it does not work in the Object.create() method. Keep In Mind.

///////////////////////////////////////////////
// * Prototypal Inheritance on Built-In Objects

// const Person = function (firstName, birthYear) {
//   Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const zee = new Person("Zee", 2001);

// console.log(zee.__proto__.__proto__); // => Object()
// - REMEMBER : Object.prototype is the top of the prototype chain.

// console.log(zee.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor); // => Point to the constructor function itself.

// console.dir(Person.prototype.constructor);

// ? Lets have a look at the Array Prototype

// const arr = [1, 2, 4, 4, 5, 6, 7, 8, 9, 8, 0];
// console.log(arr.__proto__);

// console.log(arr.__proto__ === Array.prototype);
// - Array.prototype => `Array` is the constructor function of the Array object.
// - The prototype property of the constructor function(Array) is the prototype of all the objects created with that constructor function.

// console.log(Array.prototype.__proto__); // => Object.prototype
// console.log(arr.__proto__.__proto__); // => Array.prototype
// console.log(arr.__proto__.__proto__.__proto__);

// So, all the methods are inherited from the Array.prototype. So we can extend the functionality of the Array object by adding new methods to the Array.prototype.

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(Array.prototype);
// console.log(arr.unique());

// const h1 = document.querySelector('h1');

///////////////////////////////////////
// * Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is increasing at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 10;
//   console.log(`${this.make} is slowing at ${this.speed} km/h`);
// };

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.brake();
// mercedes.accelerate();
// mercedes.brake();

///////////////////////////////////////
// * Classes

// class expression
// const Person = class {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// class declaration
// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//  // Instance Methods
//   // Methods will be added to the .prototype property of the class.
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
// }

// Remember - The functions that are defined outside of the constructor, but in the classes, will be on the prototype of the objects. Not on the objects themselves.

// const zee = new Person("Zee", 2001);
// console.log(zee.__proto__);

// console.log(Person.prototype === zee.__proto__);
// -> Because Person.prototype is the prototype of all the objects created with the Person constructor function. so it is true.

// We can also add methods to the prototype of the class(Person). It will work fine.

// Person.prototype.greet = function () {
//   console.log(`Hello, I'm ${this.firstName}`);
// };

// console.log(Person.prototype);
// console.log(zee.__proto__);
// console.log(Person.prototype.isPrototypeOf(zee));

// zee.greet();

// ? Some important points about classes.
// - Classes are not hoisted. We can not use the class keyword before the class declaration.
// - Classes are first class citizens. We can pass them as arguments to functions, return them from functions, and assign them to variables.
// - Classes are special kind of functions behind the scenes.
// - Body of the class is always executed in the strict mode.

///////////////////////////////////////
// * Setters and Getters - Assesser Properties
// - Common to all objects.
// - We can set and get the properties of an object using setters and getters.
// - These are special type of properties, so we called them as assesser properties.
// - While the other object normal properties are called data properties.

// const account = {
//   owner: "Zee",
//   movements: [200, 540, -100, 600, 780, -200],

//   get latestMovement() {
//     return this.movements.slice(-1).pop();
//   },

//   set latestMovement(value) {
//     this.movements.push(value);
//   }
// };

// // Getter Function
// console.log(account.latestMovement); // can be accessed using the property name.

// // Setter Function
// account.latestMovement = 500;
// console.log(account.latestMovement); // can be accessed using the property name.
// console.log(account.movements);

// ? Classes have also setters and getters. And they work in the same way as the ones above in objects.

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to the .prototype property of the class.
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) {
//       this._fullName = name;
//     } else {
//       console.log(`${name} is not a full name`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const zee = new Person("Muhammad Zeeshan", 2001);
// console.log(zee.fullName); // can be accessed using the property name

// - Getters and Setters are very useful for data validation.

// const zee = new Person("Muhammad Zeeshan", 2001);
// console.log(zee._fullName);

// console.log(zee); // as we have changed the property name, to get the fullName, we have to use the getter function.
// console.log(zee.fullName);
// console.log(zee);

// const zuh = new Person("Zuhaib", 2000);
// console.log(zuh.fullName);

////////////////////////////////////
// * Static Methods
// - Static methods are methods that are not attached to any object.
// - They are called on the class itself.
// - We can use them to create utility/helper functions.

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

// static method

//   static greeting() {
//     console.log("Hello, I'm a static method");
//     console.log(this); // Notice that, this is now pointing to the entire class itself.
//   }
// }

// Person.greeting();

//////////////////////////////////
// * Object.create
// - Third way of implementing prototype inheritance or delegation, as we can also call it
// - Object.create is a method that creates a new object, with the specified prototype object.
// - However, there are no prototype properties involved. No constructor function, And No new operator.
// - So, instead we can use Object.create to essentially manually set the prototype of an object, to any other object that we want.

// Lets Practice : We will create a prototype, that will be the prototype of the objects that we create.

// const personPrototype = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(name, birthYear) { // Looks like the constructor function. But is not a constructor function. becuase we are not using the new operator.
//     this.name = name;
//     this.birthYear = birthYear;
//   },

//   test() {
//     console.log(this);
//   }
// };

// Now lets create an object.
// const zee = Object.create(personPrototype); // this will return a brand new object, that is linked to the prototype, that we passed in the parameter.
// console.log(zee);

// Now for a moment, lets try in this way

// zee.name = "Zee";
// zee.birthYear = 2001;
// zee.calcAge(); // this will work fine.

// Verify some of the results

// console.log(zee.__proto__); // this will show the prototype of the object.
// console.log(zee.__proto__ === personPrototype); // this will show that the prototype of the object is the prototype that we passed in the parameter.

// Now lets create another object

// const zuh = Object.create(personPrototype);

// Now instead of assigning the values directly, we can define a function to perform that task. Lets create a function named as "init" => Check the personPrototype object.

// now create the properties for the zuh object.

// zuh.init("Zuhaib", 1996);
// zuh.calcAge();
// zuh.test(); // will point to the zuh object.

///////////////////////////////////////
// * Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// this will show that the type of a function is function.

////////////////////////////////////////////////////////////////
// * Inheritance Between Classes using (Constructor Functions )

// Parent constructor function
// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// child constructor function
// const Student = function (name, birthYear, major) {
//   this.name = name;
//   this.birthYear = birthYear;
//   this.major = major;
// };

// const zee = new Student("Zeeshan", 2001, "Computer Science");
// console.log(zee);

// add a method to the Student prototype
// Student.prototype.introduce = function () {
//   console.log(
//     `Hi, I'm ${this.name}, I'm a ${this.major} majoring in ${this.major}`
//   );
// };

// zee.introduce();

// ? Improve our code by using inheritance

// Parent constructor function
// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// child constructor function
// const Student = function (name, birthYear, major) {
// call the parent constructor function
// Person.call(this, name, birthYear);
// this.major = major;
// };

// Linking Prototypes
// Student.prototype = Object.create(Person.prototype);
// Student.prototype = Person.prototype; // => This will not work at all, watch the relevant video

// add a method to the Student prototype
// Student.prototype.introduce = function () {
//   console.log(
//     `Hi, I'm ${this.name}, I'm a ${this.major} majoring in ${this.major}`
//   );
// };

// const zee = new Student("Zeeshan", 2001, "Computer Science");

// zee.introduce();
// zee.calcAge(); //Inheritance
// console.log(zee.__proto__); // this will show the prototype of the object But with the Person name.

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// console.log(zee instanceof Student);
// console.log(zee instanceof Person);
// console.log(zee instanceof Object);

///////////////////////////////////////
// * Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

///////////////////////////////////////////////
// * Inheritance Between "Classes": ES6 Classes
// In JS, classes are the abstraction over the constructor functions.
// to implement the inheritance between classes, we need to use the keyword 'extends' and the keyword 'super'

// const Person = function (name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;

//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// ? Example 1
// class Student extends Person {
//   constructor(name, birthYear, major) {
// always needs to happen first
//     super(name, birthYear); // call the parent constructor function
//     this.major = major;
//   }
// }

// const zee = new Student("Zeeshan", 2001, "Computer Science");
// console.log(zee);

// ? Example 2
// class Student extends Person {}

// const zee = new Student("Zeeshan", 2001);
// console.log(zee);

// ? Example 3
// class Student extends Person {
//   constructor(name, birthYear, major) {
//     super(name, birthYear);
//     this.major = major;
//   }

//   introduce() {
//     console.log(
//       `Hi, I'm ${this.name}, I'm a ${this.major} majoring in ${this.major}`
//     );
//   }
// }

// const zee = new Student("Zeeshan", 2001, "Computer Science");
// console.log(zee);
// zee.introduce();
// zee.calcAge();

// if we have the same function with the same name of calcAge in the Student class, then it will override the parent class function. It will show the result of the child class function. Because it came first in the prototype chain.

////////////////////////////////////////////////
// * Inheritance Between Classes Object.create()

// const PersonPrototype = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(name, birthYear) {
//     this.birthYear = birthYear;
//     this.name = name;
//   },
// };

// const StudentPrototype = Object.create(PersonPrototype);
// StudentPrototype.init = function (name, birthYear, major) {
//   PersonPrototype.init.call(this, name, birthYear);
//   this.major = major;
// };

// StudentPrototype.introduce = function () {
//   console.log(
//     `Hi, I'm ${this.name}, I'm a ${this.major} majoring in ${this.major}`
//   );
// };
// const zuh = Object.create(StudentPrototype);

// zuh.init('Zuhaib', 2001, 'Computer Science');
// zuh.introduce();
// zuh.calcAge();

///////////////////////////////////////
// * Another Class Example

// class Account {
//   constructor(name, currency, pin) {
//     this.owner = name;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.local = navigator.language;

//     console.log(`Thanks for opening an account with us, ${this.owner}`);
//   }

//   deposit(amount) {
//     this.movements.push(amount);
//     console.log(`You have deposited ${amount} ${this.currency}`);
//   }

//   withdraw(amount) {
//     this.deposit(-amount);
//     console.log(`You have withdrawn ${amount} ${this.currency}`);
//   }

//   approveLoans(amount) {
//     return true;
//   }

//   requestLoan(amount) {
//     if (this.approveLoans(amount)) {
//       this.deposit(amount);
//       console.log(`You have requested a loan of ${amount} ${this.currency}`);
//     } else {
//       console.log(
//         `Sorry, you cannot request a loan of ${amount} ${this.currency}`
//       );
//     }
//   }
// }

// const acc1 = new Account("Zeeshan", "USD", 1234);
// acc1.deposit(100);
// acc1.withdraw(50);
// acc1.requestLoan(500);
// console.log(acc1);

/////////////////////////////////////////////////////
// * Encapsulation Protected Properties and Methods
// - Using the _ before the property name, we can make the property private.

// class Account {
//   constructor(name, currency, pin) {
//     this.owner = name;
//     this.currency = currency;
//     this._pin = pin;
//     this._movements = [];
//     this.local = navigator.language;

//     console.log(`Thanks for opening an account with us, ${this.owner}`);
//   }

//   getMovements() {
//     return this.movements;
//   }

//   deposit(amount) {
//     this.movements.push(amount);
//     console.log(`You have deposited ${amount} ${this.currency}`);
//   }

//   withdraw(amount) {
//     this.deposit(-amount);
//     console.log(`You have withdrawn ${amount} ${this.currency}`);
//   }

//   _approveLoans(amount) {
//     return true;
//   }

//   requestLoan(amount) {
//     if (this.approveLoans(amount)) {
//       this.deposit(amount);
//       console.log(`You have requested a loan of ${amount} ${this.currency}`);
//     } else {
//       console.log(
//         `Sorry, you cannot request a loan of ${amount} ${this.currency}`
//       );
//     }
//   }
// }

// const acc1 = new Account("Zeeshan", "USD", 1234);
// console.log(acc1._pin); // The decision to use the hash sign instead of the more traditional underscore '_' was made to avoid breaking changes in existing libraries, which currently mark private fields that way.

/////////////////////////////////////////////////////
// * Encapsulation Private Class Fields and Methods
// - Properties in classes are called the class fields.
// - Methods in classes are called the class methods.

/* 
=> Types of Class Fields
========== Fields on the class instance ==========
- 1) Public Class Fields
- 2) Private Class Fields
- 3) Protected Class Fields
- 4) Public Class Methods
- 5) Private Class Methods
- 6) Protected Class Methods
========== Fields on the class itself  ==========
- 7) Static Class Fields
- 8) Static Class Methods
*/

// => 1) Public Class Fields
// - Public class fields are accessible from anywhere in the class.
// - Will be present on all the instances of the class.
// - These fields (properties), will be available to instances not to the prototypes of the objects.

// => 2) Private Class Fields
// - Private class fields are accessible only from within the class.
// - Will be present on all the instances of the class.

// class Account {

// Public Class Fields
// local = navigator.language;

// Private Class Fields
// #movements = []; // By declaring the fields using # makes the field “entirely” private. Meaning, these fields can’t be accessed or even detected outside of the containing class - even by JS users.
// #pin;

// constructor(name, currency, pin) {
//   this.owner = name;
//   this.currency = currency;
//   this.#pin = pin;

//   console.log(`Thanks for opening an account with us, ${this.owner}`);
// }

// Public Class Methods
// getMovements() {
//   return this.movements;
// }

// deposit(amount) {
//   this.movements.push(amount);
//   console.log(`You have deposited ${amount} ${this.currency}`);
// }

// withdraw(amount) {
//   this.deposit(-amount);
//   console.log(`You have withdrawn ${amount} ${this.currency}`);
// }

// requestLoan(amount) {
//   if (this.#approveLoans(amount)) {
//     this.deposit(amount);
//     console.log(`You have requested a loan of ${amount} ${this.currency}`);
//   } else {
//     console.log(
//       `Sorry, you cannot request a loan of ${amount} ${this.currency}`
//     );
//   }
// }

// Private Class Methods
// #approveLoans(amount) {
//   return true;
// }

// ? Static Class Fields / Methods => Helper Methods
// only available to the class itself, not to the instances of the class.
// }

// const acc1 = new Account("Zeeshan", "USD", 1234);
// console.log(acc1.movements);
// console.log(acc1.#pin);
// console.log(acc1.local);
// console.log(acc1.#approveLoans(500));

////////////////////////////////
// * Chaining Methods

// class Account {
//   local = navigator.language;

//   #movements = [];
//   #pin;

//   constructor(name, currency, pin) {
//     this.owner = name;
//     this.currency = currency;
//     this.#pin = pin;
//     console.log(`Thanks for opening an account with us, ${this.owner}`);
//   }

//   getMovements() {
//     return this.#movements;
//   }

//   deposit(amount) {
//     this.#movements.push(amount);
//     return this;
//   }

//   withdraw(amount) {
//     this.deposit(-amount);
//     return this; // return the current object, to allow chaining
//   }

//   requestLoan(amount) {
//     if (this.#approveLoans()) {
//       this.deposit(amount);
//     } else {
//       console.log(
//         `Sorry, you cannot request a loan of ${amount} ${this.currency}`
//       );
//     }
//     return this;
//   }
//   #approveLoans() {
//     return true;
//   }
// }

// const acc1 = new Account("Zeeshan", "USD", 1234);

// acc1.deposit(100).withdraw(50).requestLoan(500);
// console.log(acc1.getMovements());

///////////////////////////////////////
// * Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/


// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//     return this;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// class EVCl extends Car {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }
//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/h, with a charge of ${
//         this.#charge
//       }`
//     );
//     return this;
//   }
// }
// const rivian = new EVCl('Rivian', 120, 23);
// console.log(rivian);
// console.log(rivian.#charge);
// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .chargeBattery(50)
//   .accelerate();
// console.log(rivian.speedUS);