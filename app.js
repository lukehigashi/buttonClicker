
//The variable "Uscore" here refers to the user score, which before anything starts begins at zero.
var Uscore = 0;

//"highscore" is another variable which we will use to compare to, it can be set to any number.
var highscore = 10;

//This function below is called "press", all the action for press happens between the brace on line 9 through line 26
function press() {
	
	//add "++" at the end of a variable will add 1 and save the new value
	Uscore++;
	
	//This will create new text at the paragraph labled "score"
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;
	
	//This is an "if" statement. The condition is in the parentheses, and the action is between the braces
	if (Uscore > highscore) {
		
		//This creates new text which will replace the old text in the paragraph labled "hiscore"
		document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
		
		//"return" will properly end the "if" action 
		return;
	}
};
