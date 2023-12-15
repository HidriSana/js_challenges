//const maxTemperatures = [17, 21, 23];
const maxTemperatures = [12, 5, -5, 0, 4];

function maxTemperaturesInXDays(array) {
  array.forEach((element) => {
    let index = array.indexOf(element);
    let inXDays = index + 1;
    let weatherCasting = `${element} degrés dans ${inXDays} jour`;
    day === 1 ? console.log(weatherCasting) : console.log(`${weatherCasting}s`);
  });
}
maxTemperaturesInXDays(maxTemperatures);
