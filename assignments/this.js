/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. IMPLICIT binding means that the "this" keyword will refer to the object that calls the method that references "this" as the context. It is usually the object to the left side of the method invocation.
 * 2. EXPLICIT binding means that the "this" keyword will refer to the object that is explicitly set as the reference object by using "call", "apply" or "bind". It ignores whatever implictly binding initially exists on the method.
 * 3. NEW binding means that the "this" keyword will refer to the object created when the new keyword is used to invoke a function.
 * 4. WINDOW binding is usually the fallback when the function doesn't have a "this" explicitly/implictly defined or when not called with a new keyword. It defaults to the window object. Unless when it "strict" mode, it defaults to undefined.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function getName() {
  return this.name;
}

getName(); // "this" here will default to the window object

// Principle 2

// code example for Implicit Binding

let onyeka = {
  name: "Onyeka",
  location: "Lagos, Nigeria",
  height: "6 foot 5 inches",
  getDescription: function() {
    return `${this.name} has a height of ${this.height} and is located in ${this.location}`;
  }
};

console.log(onyeka.getDescription()); // "this" here will refer to the "onyeka" object because it invokes the method call

// Principle 3

// code example for New Binding

let Person = function(person) {
  this.name = person.name;
  this.location = person.location;
  this.height = person.height;
};

let justin = new Person({
  name: "Justin",
  location: "Lagos, Nigeria",
  height: "Somewhere around 4ft"
}); // "this" here refers to the object created when the function was invoked with the "new" keyword

// Principle 4

// code example for Explicit Binding

let mensah = {
  name: "Twum Mensah",
  location: "Somewhere in the World",
  height: "5 foot"
};

console.log(onyeka.getDescription.call(mensah));

