var computer = 0;
var player = 0;
var won = 0;
const nbtn = document.getElementById("new");
const msg = document.getElementById("msg");
function play(p) {
  if (player != 0) {
    alert("Please Start A New Game!");
  } else {
    player = p;
    computer = Math.floor(Math.random() * 3) + 1;
    console.log(player, computer);
    if (player === computer) {
      msg.textContent = "It resulted in a draw!";
    } else if (player === 1) {
      if (computer === 2) {
        msg.textContent = "Computer chose paper, You Lost!";
      } else {
        msg.textContent = "Computer chose scissors, You Won!";
        won = won + 1;
      }
    } else if (player === 2) {
      if (computer === 1) {
        msg.textContent = "Computer chose rock, You Won!";
        won = won + 1;
      } else {
        msg.textContent = "Computer chose scissors, You Lost!";
      }
    } else if (player === 3) {
      if (computer === 1) {
        msg.textContent = "Computer chose rock, You Lost!";
      } else {
        msg.textContent = "Computer chose paper, You Won!";
        won = won + 1;
      }
    }
  }
}

function newg() {
  player = 0;
  computer = 0;
}
