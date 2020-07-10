var Dog = require("./Dog");
var Cat = require("./Cat");

var Mouse = require('./Mouse');

var tom = new Cat();

var mouse = new Mouse("Chim");

var dog = new Dog();

try {
	tom.eat(dog);
} catch {
	console.log("Error while cat eating a dog!");
}

tom.eat(mouse);
console.log(tom);


