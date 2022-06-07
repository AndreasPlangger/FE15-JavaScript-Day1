/*Exercise 1

Sum the following variables and store the result in one new variable:

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;


Multiply the following variables and store the result in one new variable:

var f = '1';
var g = 15;
var h = 8;
var i = "1";

Divide the two results that you got from the arithmetic operations and print the result in the web browser.
*/

var a = 7;
var b = 14;
var c = "21";
var d = '36';
var e = 42;

var sum = a + b + parseInt(c) + parseInt(d) + e;


var f = '1';
var g = 15;
var h = 8;
var i = "1";

var product = parseInt((f)) * g * h * parseInt((i));


/*Exercise 2
From the following multidimensional Array:

[ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]

Select and output the numbers 11, 25, 17, 27 and 0 in the console.
*/

myArray = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3]];

console.log((myArray[1][1]) + (",") + (" ") + (myArray[4][2]) + (",") + (" ") + (myArray[5][3]) + (",") + (" ") + (myArray[2][3]) + (",") + (" ") + (myArray[2][1]));
