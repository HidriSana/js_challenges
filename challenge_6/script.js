dolfinsScores1 = [44, 23, 71];
koalasScores1 = [65, 54, 49];
dolfinsScores2 = [85, 54, 41];
koalasScores2 = [23, 34, 27];

let averageScore = (scores) => {
  let initialScore = 0;
  let scoresSum = scores.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialScore
  );
  let average = scoresSum / scores.length;
  return average;
};

function checkWinner(dolfinsScore, koalasScore) {
  if (dolfinsScore > koalasScore && dolfinsScore >= koalasScore * 2)
    return `Les Dolfins  gagnent (${dolfinsScore} VS ${koalasScore})`;
  if (dolfinsScore < koalasScore && koalasScore >= dolfinsScore * 2)
    return `Les Koalas gagnent (${koalasScore} VS ${dolfinsScore})`;
  return "Personne ne gagne!";
}

let dolfinsAverage1 = averageScore(dolfinsScores1);
let koalasAverage1 = averageScore(koalasScores1);
console.log(checkWinner(dolfinsAverage1, koalasAverage1));

let dolfinsAverage2 = averageScore(dolfinsScores2);
let koalasAverage2 = averageScore(koalasScores2);
console.log(checkWinner(dolfinsAverage2, koalasAverage2));
