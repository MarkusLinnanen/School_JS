let nofc = parseInt(prompt("Enter Amount of candidates"))
const candidates = [];
for (let i = 0; i < nofc; i++){
  candidates.push({"name": prompt(`Enter a name for candidate ${i}`), "votes": 0});
}

let nofv = parseInt(prompt("Enter Amount of voters"));
for(let i = 0; i < nofv; i++){
  const n =  prompt("Who do you want to vote for by name");
  for(let j = 0; j < nofc; j++)
    candidates[j]["votes"] += candidates[j]["name"] === n;
}
candidates.sort(function(n,k){return (k["votes"] - n["votes"]);});
console.log(`The winner is ${candidates[0]["name"]} with ${candidates[0]["votes"]}`)
console.log("Results:")
for(let i = 0; i < nofc; i++)
  console.log(candidates[i]["name"] + ": " + candidates[i]["votes"] + " votes");
