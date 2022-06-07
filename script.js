let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
console.log(randomNumber2);

let highScore;
let announce;
if (randomNumber1 > randomNumber2) {
  // console.log('R1 was higher');
  highScore = '🚩 Player 1 wins!';
} else if (randomNumber2 > randomNumber1) {
  // console.log('Player 2 wins!');
  highScore = 'Player 2 wins! 🚩';
} else if (randomNumber1 === randomNumber2) {
  // console.log('R1 and R2 are equal');
  highScore = 'Draw!';
}
document.getElementById('winner').innerHTML = highScore;

console.log(highScore);

if (randomNumber1 && randomNumber2) {
  let n = randomNumber1;
  document.querySelector('.img1').src = 'images/dice' + n + '.png';
  n = randomNumber2;
  document.querySelector('.img2').src = `images/dice${n}.png`;

  // document.querySelector('.img1').src ='images/dice1.png';
}
