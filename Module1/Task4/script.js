"use strict";
let num1,num2,num3;
num1 = parseInt(prompt("Enter first number"));
num2 = parseInt(prompt("Enter second number"));
num3 = parseInt(prompt("Enter third number"));
document.querySelector('#hdr').innerHTML = 'The * of the numbers ' + num1.toString() + ", " + num2.toString() + ", " + num3.toString();
document.querySelector('#sum').innerHTML = 'Sum = ' + (num1 + num2 + num3).toString();
document.querySelector('#prod').innerHTML = 'Product = ' + (num1 * num2 * num3).toString();
document.querySelector('#avg').innerHTML = 'Average = ' + ((num1 + num2 + num3) / 3).toString();