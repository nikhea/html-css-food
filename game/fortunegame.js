var p1Dispaly = document.querySelector('#p1')
 var p2Dispaly = document.querySelector('#p2')
 var button1 =document.querySelector('#button1')
 var button2 =document.querySelector('#button2')
 var Reset = document.querySelector('.Reset')
 var numInput   = document.querySelector('input')
 var winningScoreDisplay   = document.querySelector('.change')
var winScore = 5
var gameOver = false
var player1socre =0
var player2socre =0


 button1.addEventListener('click', function () {
      if (!gameOver) {
        player1socre++
      } 
      if (player1socre === winScore ) {
          gameOver=true
          p1Dispaly.classList.add('win')
          alert('you won')
      }
   p1Dispaly.textContent=player1socre
 
 })


 button2.addEventListener('click', function () {
    if (!gameOver) {
        player2socre++
      } 
      if (player2socre === winScore ) {
          p2Dispaly.classList.add('win')
          gameOver=true
          alert('you won')
          
      }
   p2Dispaly.textContent=player2socre
})

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = numInput.value
   winScore = Number(numInput.value)
   reset()
})
Reset.addEventListener('click', function(){
reset()
})


function reset() {
    gameOver = false
    player1socre =0
    player2socre =0
    p1Dispaly.textContent =0;
    p2Dispaly.textContent =0;
    p1Dispaly.classList.remove('win');
    p2Dispaly.classList.remove("win")
}