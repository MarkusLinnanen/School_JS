"use strict";
let num1;
name = prompt("What is your name");
switch (Math.floor(Math.random() * 4)) {
  case 0:
    document.querySelector('#hdr').innerHTML = 'You are a Gryffindor, ' + name;
    break;
  case 1:
    document.querySelector('#hdr').innerHTML = 'You are a Hufflepuff, ' + name;
    break;
  case 2:
    document.querySelector('#hdr').innerHTML = 'You are a Ravenclaw, ' + name;
    break;
  case 3:
    document.querySelector('#hdr').innerHTML = 'You are a Slytherin, ' + name;
    break;
}