// Include a document.ready function here at end


gameState = {
	correctAnswers: 0,
	wrongAnswers: 0,
	currentQuestion: "",
	currentAnswer: "",
	currentChoices:"",
	userSelection:"",
	counter: 0,
	timeRemaining: 




	content = [
	// Object 1 in array:
	{
		question: "Which Cub wears number 17?",
		answers: ["Kris Bryant", "Anthony Rizzo", "Javier Baez", "Jon Lester"],
		correctAnswer: "Kris Bryant"
	},
	// Object 2 in array
		{
		question: "Which Cleveland Indian committed a heinous error in Game 6 of the World Series?",
		answers: ["Mike Napoli", "Tyler Naquin", "Trevor Bauer", "Francisco Lindor"],
		correctAnswer: "Tyler Naquin"
	},
		{
		question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
		answers: ["William and Elizabeth", "Joseph and Catherine", "John and Mary", "George and Anne"],
		correctAnswer: "Tyler Naquin"
	},
		{
		question: "When did the Liberty Bell get its name?",
		answers: ["when it was made, in 1701", "when it rang on July 4, 1776", "in the 19th century, when it became a symbol of the abolition of slavery", "none of the above"],
		correctAnswer: "Tyler Naquin"
	},
		{
		question: "Which Cleveland Indian committed a heinous error in Game 6 of the World Series?",
		answers: ["Mark", "Tyler ", "Trevor", "Francisco"],
		correctAnswer: "Tyler Naquin"
	}
	]
};

// Need to figure out how to get option to recognize it's the correct option
// Selecting a "package" of content in the array


nextQuestion();
$(".answer1").click(function(){
	if (gameState.currentChoices[0]===gameState.currentAnswer) {
		console.log("correct!");
		gameState.correctAnswers ++;
		gameState.counter ++;
		replaceScoreboard();
	}
	else {
		console.log("wrong!");
		gameState.wrongAnswers ++;
		gameState.counter ++;
		nextQuestion();

	}
	renderScoreboard();
});

$(".answer2").click(function(){
	if (gameState.currentChoices[1]===gameState.currentAnswer) {
		gameState.correctAnswers ++;
		gameState.counter ++;
		nextQuestion();
	}
	else {
		console.log("wrong!");
		gameState.wrongAnswers ++;
		gameState.counter ++;
		nextQuestion();

	}
	renderScoreboard();
});

$(".answer3").click(function(){
	if (gameState.currentChoices[2]===gameState.currentAnswer) {
		gameState.correctAnswers ++;
		gameState.counter ++;
		nextQuestion();
	}
	else {
		console.log("wrong!");
		gameState.wrongAnswers ++;
		gameState.counter ++;
		nextQuestion();

	}
	renderScoreboard();
});

$(".answer4").click(function(){
	if (gameState.currentChoices[3]===gameState.currentAnswer) {
		gameState.correctAnswers ++;
		gameState.counter ++;
		nextQuestion();
	}
	else {
		console.log("wrong!");
		gameState.wrongAnswers ++;
		gameState.counter ++;
		nextQuestion();

	}
	renderScoreboard();
});

// var selection = content[Math.floor(Math.random()*5)];
// console.log(selection);
// gameState.currentQuestion = selection.question;
// gameState.currentAnswer = selection.correctAnswer;
// gameState.currentChoices = selection.answers;


function nextQuestion () {
	selection = content[gameState.counter];
		gameState.currentQuestion = selection.question;
		gameState.currentAnswer = selection.correctAnswer;
		gameState.currentChoices = selection.answers;
}

function renderScoreboard () {
	var questionCurrent = $(".question").html(gameState.currentQuestion);
	var option1 = $(".answer1").html(gameState.currentChoices[0]);
	var option2 = $(".answer2").html(gameState.currentChoices[1]);
	var option3 = $(".answer3").html(gameState.currentChoices[2]);
	var option4 = $(".answer4").html(gameState.currentChoices[3]);
	var wins = $(".wins").html(gameState.correctAnswers);
}

function replaceScoreboard () {
	var questionCurrent = $(".question").html("Correct!");
	var option1 = $(".answer1").html("<img src = '../images/raw.gif'");
	var option2 = $(".answer2").html("");
	var option3 = $(".answer3").html("");
	var option4 = $(".answer4").html("");
	var wins = $(".wins").html(gameState.correctAnswers);
	nextQuestion();
} 

console.log(renderScoreboard());




	// function countdown = for (var i = 0; i < 30; i++) {
	// setTimeout(function() {
	// 	console.log("lower!")
	// 	i++
	// }, 1000 * 1);
	// };


