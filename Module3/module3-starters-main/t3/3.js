'use strict';
const names = ['John', 'Paul', 'Jones'];
for (let i = 0; i < 3; i++){
  document.querySelector('#target').innerHTML += "<li>" + names[i] + "</li>";
}