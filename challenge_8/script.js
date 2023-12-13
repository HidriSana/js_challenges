const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip(note) {
  const tipPercentage = note > 50 && note < 300 ? 0.15 : 0.2;
  const tip = note * tipPercentage;
  return tip;
}
function calcAverage(array) {
  initialValue = 0;
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const average = sum / array.length;
  return average;
}
console.log(calcTip(100));

const tips = bills.map(calcTip);

console.log(tips);

const totals = bills.map((bill, index) => bill + tips[index]);

console.log(totals);

console.log(calcAverage(totals));
