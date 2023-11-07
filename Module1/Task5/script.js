"use strict";
let num1;
num1 = parseInt(prompt("Enter year to check"));
const bol = ((num1 % 4) == 0) || (((num1 % 100) == 0) && ((num1 % 400) == 0));
document.querySelector('#hdr').innerHTML = 'The statement that Year ' + num1.toString() + " is a leap year is " + bol;
//document.querySelector('#hdr').innerHTML = bol;