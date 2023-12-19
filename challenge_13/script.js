players1 = [
  "Neuer",
  "Pavard",
  "Martinez",
  "Alaba",
  "Davies",
  "Kimmich",
  "Goretzka",
  "Coman",
  "Muller",
  "Gnarby",
  "Lewandowski",
];
players2 = [
  "Burki",
  "Schulz",
  "Hummels",
  "Akanji",
  "Hakimi",
  "Weigl",
  "Witsel",
  "Hazard",
  "Brandt",
  "Sancho",
  "Gotze",
];

let gkBayern = players1[0];
let fieldPlayersBayern = [];
for (i = 1; i < players1.length; i++) {
  fieldPlayersBayern.push(players1[i]);
}

const allPlayers = players1.concat(players2);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const team1Odd = game.odds.team1;

const team2Odd = game.odds.team2;

const draw = game.odds.x;

function printGoals(...allPlayers) {
  allPlayers.forEach((player) => {
    console.log(player);
  });
}
//return `Nombre total de buts : ${}`

console.log(printGoals(...game.scored));
