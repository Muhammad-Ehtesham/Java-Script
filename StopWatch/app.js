// let check = false;
// let timeLeft = 60;
// let Timer;

// function startTimer() {
//   function startingTimer() {
//     timeLeft--;
//     if (timeLeft < 0) {
//       clearInterval(Timer);
//       check = false;
//     } else {
//       document.getElementById("timer_display").innerHTML = `${timeLeft} s`;
//       console.log(timeLeft);
//     }
//   }
//   if (!check) {
//     check = true;
//     Timer = setInterval(startingTimer, 1000); 
//   } else {
//     clearInterval(Timer);
//     check = false;
//   }
// }

// function resetTimer() {  
//   timeLeft = 60;
//   check = false;
//   clearInterval(Timer); 
//   document.getElementById("timer_display").innerHTML = `${timeLeft} s`;
// }


let check = false;
let timeLeft;
let Timer;
let mode = 'timer'; // Initial mode is set to 'timer'

function toggleMode(newMode) {
  mode = newMode;
  if (mode === 'timer') {
    document.getElementById("timer_display").innerHTML = `${timeLeft} s`;
    timeLeft = 60; 
  } else if (mode === 'stopwatch') {
    document.getElementById("timer_display").innerHTML = `0 s`;
    timeLeft = 0;
  }
}

function startTimer() {
  function startingTimer() {
    if (mode === 'timer') {
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(Timer);
        check = false;
      } else {
        document.getElementById("timer_display").innerHTML = `${timeLeft} s`;
      }
    } else if (mode === 'stopwatch') {
      timeLeft++;
      document.getElementById("timer_display").innerHTML = `${timeLeft} s`;
    }
  }
  if (!check) {
    check = true;
    Timer = setInterval(startingTimer, 1000); 
  } else {
    clearInterval(Timer);
    check = false;
  }
}

function resetTimer() {    
  check = false;
  clearInterval(Timer); 
  if (mode === 'timer') {
    timeLeft = 60;
    document.getElementById("timer_display").innerHTML = `${timeLeft} s`;
  } else if (mode === 'stopwatch') {
    timeLeft = 0;
    document.getElementById("timer_display").innerHTML = `0 s`;
  }
}
