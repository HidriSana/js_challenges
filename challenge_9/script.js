//EXERCICE N° 1
const hiddenMessage = [
  "X",
  "X",
  "X",
  "X",
  "W",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "L",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  " ",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "D",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "O",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "N",
  "X",
  "X",
  "X",
  "X",
  "E",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  "X",
  ",",
  "X",
  " ",
  "X",
];

function decodeMessageRemovingX(hiddenMessage) {
  let revealedMessage = "";
  for (let i = 0; i < hiddenMessage.length; i++) {
    if (hiddenMessage[i] !== "X") {
      revealedMessage += hiddenMessage[i];
    }
  }
  return revealedMessage;
}

console.log(decodeMessageRemovingX(hiddenMessage));

//EXERCICE N° 2

const hiddenCode =
  "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX";

const hiddenCodeArray = hiddenCode.split("");

function decodeMessageRemovingXAndEvenNumbers(hiddenMessage) {
  let revealedMessage = "";
  for (let i = 0; i < hiddenMessage.length; i++) {
    if (hiddenMessage[i] !== "X" && parseInt(hiddenMessage[i] % 2) !== 0) {
      revealedMessage += hiddenMessage[i];
    }
  }
  return revealedMessage;
}

console.log(decodeMessageRemovingXAndEvenNumbers(hiddenCodeArray));
