'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const d = document.querySelector("#target");
for(let i = 0; i < students.length; i++){

  let e = document.createElement("option");
  let t = document.createTextNode(students[i].name)
  e.value = students[i].id;
  e.appendChild(t)
  d.appendChild(e);

}