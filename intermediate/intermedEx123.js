/*Exercise 1

Write a JavaScript program that will sort the following values alphabetically: Tesla, Audi, Renault, Volvo, Mazda, Fiat and Ferrari. (Use an array to contain these values)*/


var cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];

var carsOrdered = cars.sort();

console.log(carsOrdered);



/*Exercise 2
Create a program where:

1. The first array contains the following values: apple, banana, kiwi

Using different methods, the output should be as follows: 
apple, banana, kiwi, orange
apple, banana, kiwi (Each statement should be outputted on a separate line.)

2. The second array contains the following values:

monkey, horse, dog

Using different methods, the output should be as follows:

dog, horse, monkey
cat, dog, horse, monkey*/

var fruits = ["apple", "banana", "kiwi"];

fruits.push("orange");

console.log(fruits);

fruits.pop();

console.log(fruits);


var animals = ["monkey", "horse", "dog"];

var animalsSorted = animals.sort();
console.log(animalsSorted);

animalsSorted.unshift("cat");
console.log(animalsSorted);



/*Exercise 3

Create a variable containing the following string: "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"

Create a program that will output each fruit on a separate line in the web browser:

mango 
cherries 
kiwi 
grapes
pear 
peach 
orange 
lemon*/

var fruits = "mango/cherries/kiwi/grapes/peach/orange/lemon";

console.log(fruits);

var fruitsSplit = fruits.split("/");

console.log(fruitsSplit);

document.write(fruitsSplit.join("<br></br>"));


