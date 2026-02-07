function guesNumber(){
    var userNum = Number(document.getElementById("guess").value);
    console.log(userNum);
    

var diceNum = Math.floor(Math.random() * 9);
console.log(diceNum);

if (userNum === diceNum) {
  Swal.fire({
  icon: 'success',
  title: '🎉 You Win!',
  text: 'Congratulations! You have won the game.',
  confirmButtonText: 'OK'
});
} else {
 Swal.fire({
  icon: 'error',
  title: '😢 Sorry!',
  text: 'You lost the game. Try again!',
  confirmButtonText: 'Retry'
});
}
document.getElementById("guess").value = "";
}