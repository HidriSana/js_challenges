function calcTip(note) {
  const tipPercentage = note > 50 && note < 300 ? 0.15 : 0.2;
  const tip = note * tipPercentage;
  return tip;
}
console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = bills.map(calcTip);

console.log(tips);

const totals = bills.map((bill, index) => bill + tips[index]);

console.log(totals);
