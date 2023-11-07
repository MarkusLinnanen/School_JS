const arr = [];
let iput = "1";
do {
  iput = prompt("Enter num");
  arr.append(iput);
}while(iput != "0")

arr.sort();

console.log(arr.toString());