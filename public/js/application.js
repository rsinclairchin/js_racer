// var wherePlayaOneAt = document.getElementsByClassName("active")[0];
// var wherePlayaTwoAt = document.getElementsByClassName("active")[1];

document.onkeyup = function(event) {
  keyWasPressed(event.keyCode);
};

var keyWasPressed = function(event) {
  if (event === 71) {
    advancePlayer(1);
  } else if (event === 72) {
    advancePlayer(2);
  };
  wonYet();
}


var advancePlayer = function(player) {
  document.querySelector("#track"+player+" td.active").nextSibling.nextSibling.classList.add("active");
  document.querySelector("#track"+player+" td.active").classList.remove("active");
}




var wonYet = function(){
for(var i=1; i<=2; i++){
  var next = document.querySelector("#track"+i+" td.active").nextSibling.nextSibling
  if (next===null){
    declareWinner(i);
   //  alert("SOMEONE WON!!!!!")
   // else if
  }
}
  // var nextOne = document.querySelector("#track1 td.active").nextSibling.nextSibling
  // var nextTwo = document.querySelector("#track2 td.active").nextSibling.nextSibling
  // if (nextOne === null){
  //   alert("G WINS")
  // } else if (nextTwo === null){
  //   alert("H WINS")
  // }
};


var declareWinner = function(winner) {
  if (winner === 1) {
    alert('G wins!');
  } else if (winner === 2) {
    alert('H wins!');
  };
};

var reset = function(){
  document.querySelector("#track1 td.active").classList.remove("active")
  document.querySelector("#track1 td").classList.add("active")
  document.querySelector("#track2 td.active").classList.remove("active")
  document.querySelector("#track2 td").classList.add("active")
}
