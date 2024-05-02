var playerName = prompt("What is your name?");
var numOfHoles = parseInt(prompt(`Hi, ${playerName}! Would you like to play 3 or 6 holes of mini golf?`));
var totalScore = 0;
var totalCoursePar = 0;
var totalParForRound = 0;

if(numOfHoles === 3){
  totalCoursePar = 9;
}
else if(numOfHoles === 6){
  totalCoursePar = 18;
}
else{
  numOfHoles = parseInt(prompt("Please enter either 3 or 6"))
}

for(let i = 1; i <= numOfHoles; i++){
  var numOfPutts = parseInt(prompt("How many putts for hole " + i + " (par is 3)"));
  totalScore += numOfPutts;
}

if(totalScore > totalCoursePar){
  totalParForRound = totalCoursePar - totalScore;
  console.log(`Nice try, ${playerName}...Your total par was: +${Math.abs(totalParForRound)}`)
}
else if(totalScore < totalCoursePar){
  totalParForRound = totalCoursePar - totalScore;
  console.log(`Great job, ${playerName}! Your total par was: -${totalParForRound}`)
}
else{
  totalParForRound = totalCoursePar - totalScore;
  console.log(`Good job, ${playerName}. Your total par was: 0`)
  console.log(totalParForRound);
}