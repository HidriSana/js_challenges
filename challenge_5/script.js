function calculateTip(note) {
  const percentageTip = note >= 50 && note <= 300 ? 0.15 : 0.2;

  const tip = note * percentageTip;

  const total = note + tip;

  console.log(
    `La note était de ${note}, le pourboire de ${tip}, et la valeur totale était de ${total}`
  );
}

calculateTip(275);
calculateTip(40);
calculateTip(430);
