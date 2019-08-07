var numberSquares = 6; 
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numberSquare = 6; 

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected")
	easyBtn.classList.add("selected");
	numberSquares = 3;
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	 for (var i = 0; i < squares.length; i++){
	 	if (colors[i]) {
	 		squares[i].style.background = colors[i];
	 		}
	 		else{
				squares[i].style.display = "none";
			}
	}
		
	
 });
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberSquares = 6;
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	 for (var i = 0; i < squares.length; i++){
	 	  squares[i].style.background = colors[i];
		    squares[i].style.display = "block";
			}
	


});


resetButton.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColors(numberSquares);
	//pick a new random color from array
	 pickedColor = pickColor();
	//change colorDisplay to match picked color 

	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors"
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	 h1.style.background = "steelblue "
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial color to squares
	squares[i].style.background = colors[i]
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked 
		if(clickedColor === pickedColor) {
			//alert("Correct")
			messageDisplay.textContent ="Correct";
			resetButton.textContent = "play Agin?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			 }
			  else   {
				//  alert("Wrong!!")
				 this.style.background = "#752e2e"
				 messageDisplay.textContent ="Try Again"
			  }
			 ;
				 
			});
          }
function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
	squares[i].style.background = color;
		}
	}
 function pickColor() {
	  	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
	
 }
 function generateRandomColors(num){
	 //make an array
	 var arr =[]
	 //add num random color
	 for (var i = 0; i < num; i++) {
		 //get random color and push into arr
		 arr.push(randomColor())
		   }
	 //return that array
	 return arr;
 }
 function randomColor(){
	 // pick a "red " from 0 -255
	var r = Math.floor(Math.random() * 256);
	  // pick a "green " from 0 -255
	var g =  Math.floor(Math.random() * 256);
	   // pick a "blue " from 0 -255
	var b = Math.floor(Math.random() * 256);
 return	"rgb(" + r + ", " + g + ", " + b + ")";



 }