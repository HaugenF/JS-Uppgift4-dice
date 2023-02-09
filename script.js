const throwTheDice = document.querySelector(".throw");
const diceImg = document.getElementById("diceImg");
const hideText = document.getElementById("hideMe");

// Första lösningen
// throwTheDice.addEventListener("click", function throwDice() {
//   const diceResult = Math.floor(Math.random() * 6 + 1);
//   hideText.hidden = true;

//   switch (diceResult) {
//     case 1:
//       diceImg.src = "Bilder/dice-1.png";
//       break;

//     case 2:
//       diceImg.src = "Bilder/dice-2.png";
//       break;

//     case 3:
//       diceImg.src = "Bilder/dice-3.png";
//       break;

//     case 4:
//       diceImg.src = "Bilder/dice-4.png";
//       break;

//     case 5:
//       diceImg.src = "Bilder/dice-5.png";
//       break;

//     case 6:
//       diceImg.src = "Bilder/dice-6.png";
//       break;

//     default:
//       diceImg.src = "Bilder/dice-1.png";
//   }
// });

// Andra lösningen
throwTheDice.addEventListener("click", function throwDice() {
  hideText.hidden = true;

  const diceResult = Math.floor(Math.random() * 6 + 1);
  diceImg.src = `Bilder/dice-${diceResult}.png`;
});
