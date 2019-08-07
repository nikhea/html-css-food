
// var todos = ["buy new turtle"];

// var inpunt = prompt("what do u like");


// while (inpunt !== "quit") {
// 	//handle input
//  if(inpunt === "list") {
// 	   listtodo();
//  }
//   else if (inpunt === "new") {
// 	  addtodo();
	 
//   }
//   else if (inpunt === "delete") {
// 	  deletetodo();
//   }
//   //ask again for new input
// 	inpunt = prompt("what do u like");
	
//   }
//   console.log("ok you quit "); 

//  function listtodo(){
//   console.log("*************");
// 	 todos.forEach(function(todo,i){
// 		 console.log(i + ":" + todo);
// 	 });
// 	 console.log("*************")
// 	}
// 	function addtodo(){
// 		// aske for new todo
// 		var jjj = prompt("enter new todo");
// 		//add to todos array
// 		todos.push(jjj);
// 		console.log("new todo added")
// 	}
// 	function deletetodo(){
// 		//ask for index of todo to be deleted
// 	var index = prompt("enter index of todo to delete");
// 	//delete that todo
// 	todos.splice(index,1);
// 	console.log("deleted todo")
//	}
var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
		this.classList.add("st")
		});
		lis[i].addEventListener("mouseout", function () {
			this.classList.remove ("st") });
			// lis[i].addEventListener("click",function(){
			// 	prompt("was clicked");
	lis[i].addEventListener("click",function(){
	this.classList.toggle("to");	
			})
	}