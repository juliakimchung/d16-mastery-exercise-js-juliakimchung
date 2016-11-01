
var height =document.getElementById("height");
var character = document.getElementById("character");
var treeButton = document.getElementById("keypress-input");
var yourTree = document.getElementById("yourTree");

function growYourTree(a, b) {
	//console.log("tree", tree );
		tree = {
			height: height.value,
			character: character.value
		}
	var inject = document.getElementById("yourTree");
	  
	  	
	for (var i = 1; i < tree.height;  i++ ) {
		
	  	var inputChar = tree.character;
	  	 var myTree =  " ".repeat(height.value--) + inputChar.repeat((i*2)-1) ;
	  	 console.log(myTree);

		// yourTree.addEventListener("keypress", function(event){

		// if (event.target.keycode === 13) {
			
		// console.log(myTree);
	
	};
	// character.addEventListener("keypress", function(event) {
			
	// 	if (event.keyCode === 13) {

	// 		growYourTree(a, b);
			
	// 	console.log(myTree);
	// }
}
	
 
 character.addEventListener("keypress", function(event){
			
 		if (event.keyCode === 13) {
			
 			growYourTree(height.value, character.value);
			
		
 	};

 })     		
	// textInput.addEventListener("keypress", function(event) {
 //      if (event.keyCode === 13) {
 //        Chatty.addNewMessage(textInput.value);
 //      }



function checkInput () {
	
	if (height.value && character.value) {
		//tree.height = height.value
		//tree.character = character.value;
		growYourTree ();
	} else  {


		alert("Both fields must have a value");
	}
}
// " ".repeat(height.value--

 treeButton.addEventListener("click", checkInput); 

 