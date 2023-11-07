let nofc = parseInt(prompt("Enter Amount of candidates"))
const candidates = [];
for (let i = 0; i < nofc; i++){
  candidates[i] = {name: prompt(`Enter a name for candidate ${i}`), votes: 0};
}
console.log(candidates);
let nofv = parseInt(prompt("Enter Amount of voters"));
for(let i = 0; i < nofv; i++){
  const n =  prompt("Who do you want to vote for by name");
  for(let j = 0; j < nofc; j++)
    candidates[j] += candidates[j].name === n;
}
candidates.sort(function(n,k){return n[1] - k[1];});
console.log(`The winner is ${candidates[0][0]} with ${candidates[0][1]}`)
console.log("Results:")
for(let i = 0; i < nofc; i++)
  console.log(candidates[i]);
