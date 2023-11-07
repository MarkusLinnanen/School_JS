const arr = [];
for (let i = 0; i < 5; i++){
  arr[4 - i] = parseInt(prompt("Enter a number"));
}
console.log(arr.toString());