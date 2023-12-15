const person1 = {
  name: "Bernard",
  weight: 78,
  height: 1.69,
  calcBMI: function calcBMI() {
    this.bmi = this.weight / Math.pow(this.height, 2);
    return this.bmi;
  },
};

const person2 = {
  name: "Marcel",
  weight: 92,
  height: 1.95,
  calcBMI: function calcBMI() {
    this.bmi = this.weight / Math.pow(this.height, 2);
    return this.bmi;
  },
};

function compareBMI(person1, person2) {
  if (person1.calcBMI() > person2.calcBMI()) {
    return `L'IMC de ${person1.name} (${person1.calcBMI()})est plus élevé que ${
      person2.name
    }(${person2.calcBMI()})`;
  }
  if (person2.calcBMI() > person1.calcBMI()) {
    return `L'IMC de ${person2.name} (${person2.calcBMI()})est plus élevé que ${
      person1.name
    } (${person1.calcBMI()})`;
  }
  return `Les IMC de ${person1.name} (${person1.calcBMI()}) et de ${
    person2.name
  }(${person2.calcBMI()}) sont égaux`;
}

console.log(compareBMI(person1, person2));
