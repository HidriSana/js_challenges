let bmi = function calculateBmi(height, weight) {
  let bmi = weight / Math.pow(height, 2);
  return bmi;
};

bernardBmi = bmi(1.69, 78);
console.log(bernardBmi);
marcelBmi = bmi(1.95, 92);
console.log(marcelBmi);

bernardBmi > marcelBmi
  ? console.log(
      `Bernard a un IMC (${bernardBmi}) que celui de Marcel (${marcelBmi})`
    )
  : console.log(
      `Marcel a un IMC (${marcelBmi}) que celui de Bernard (${bernardBmi})`
    );

function bmiInterpretation(bmi, name) {
  if (bmi < 18.5) return `${name} est maigre`;
  if (bmi < 25) return `${name} a un poids normal`;
  if (bmi < 30) return `${name} est en surpoids`;
  if (bmi < 40) return `${name} est obèse`;
  return `${name} est en obésité morbide`;
}

console.log(bmiInterpretation(29, "Bruno"));
console.log(bmiInterpretation(bernardBmi, "Bernard"));
console.log(bmiInterpretation(marcelBmi, "Marcel"));
