const arr = [];
let iput = "1";
do {
  iput = prompt("Enter num");
  if(iput !== "0" && iput) arr.push(iput);
  else break;
}while(true)
console.log(arr.sort(function (a,b){return (b-a);}).toString());