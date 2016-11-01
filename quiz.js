
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
	
	  
	  	for (var i = 1; i < tree.height;  i++ ) {
		
	  	var inputChar = tree.character;
	  	 var myTree =  " ".repeat(height.value--) + inputChar.repeat((i*2)-1) ;
	  	 console.log(myTree);
};
	
}
	character.addEventListener("keypress", function(event){
			
 		if (event.keyCode === 13) {
			
 			growYourTree(height.value, character.value);
	};

 })     		
	
function checkInput () {
	
	if (height.value && character.value) {
		
		growYourTree ();
	} else  {

		alert("Both fields must have a value");
	}
}

	treeButton.addEventListener("click", checkInput); 

 