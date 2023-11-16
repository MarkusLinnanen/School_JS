
const div = document.querySelector('#target');       // get element whose id is 'example'

const p1 = document.createElement('li');
const t1  = document.createTextNode("First Element");
p1.appendChild(t1)
const p2 = document.createElement('li');
p2.className = "my-item";
const t2  = document.createTextNode("Second Element");
p2.appendChild(t2)
const p3 = document.createElement('li');
const t3  = document.createTextNode("Third Element");
p3.appendChild(t3)

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);