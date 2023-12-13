dolfinsScores = [96, 108, 89];
koalasScores = [88, 91, 110];

let averageScore = (scores) => {
  let initialScore = 0;
  let scoresSum = scores.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialScore
  );
  let average = scoresSum / scores.length;
  return average;
};

let dolfinsAverage = averageScore(dolfinsScores);
let koalasAverage = averageScore(koalasScores);
console.log(dolfinsAverage);
console.log(koalasAverage);
function compareScores(dolfinsScore, koalasScore) {
  if (dolfinsScore > koalasScore && dolfinsScore > 100)
    return `The Dolfins won the game with a score  of ${dolfinsScore}`;
  if (dolfinsScore < koalasScore && koalasScore > 100)
    return `The Koalas won the game with a score  of ${koalasScore}`;
  return "Egalité";
}

console.log(compareScores(dolfinsAverage, koalasAverage));
