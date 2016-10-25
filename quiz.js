
var height =document.getElementById("height");
var character = document.getElementById("character");
var treeButton = document.getElementById("keypress-input");


function growYourTree(tree) {
	//console.log("tree", tree );
		tree = {
			height: height.value,
			character: character.value
		}
	  
	  	
	for (var i = 1; i <= tree.height;  i++ ) {
		
	  	var inputChar = tree.character;

		console.log (" ".repeat(height.value--) + inputChar.repeat((i*2)-1));
 		
 
		
}
 		
		
  	
 }


	

 
function checkInput () {
	//var tree ={};
	if (height.value && character.value) {
		//tree.height = height.value;
		//tree.character = character.value;
		growYourTree ();
	} else {


		alert("Both fields must have a value");
	}

}


 treeButton.addEventListener("click", checkInput);
 
