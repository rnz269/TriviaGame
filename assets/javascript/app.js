// Include a document.ready function here at end


gameState = {
	correctAnswers: 0,
	wrongAnswers: 0,
	unanswered: 0,
	currentQuestion: "",
	currentAnswer: "",
	currentChoices:"",
	userSelection:"",
	timeFreeze:false,
	counter: 0,
	correctGIFS: [
	"assets/images/bryzzo.gif", "assets/images/motteClap.gif", "assets/images/rizzoSlide.gif", "assets/images/russellFist.gif", "assets/images/heywardAllGood.gif"
	],
	wrongGIFS: [
	"assets/images/hendricksFrustrated.gif", "assets/images/nateWrong.gif", "assets/images/garzaWrong.gif", "assets/images/maddonFrustrated.gif", "assets/images/rizzoWrong.gif"  
	],

	content: [
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
	],
	
	timeRemaining: {
		timeCounter: 10,
		interval: setInterval(function(){
			if (gameState.timeFreeze === false){
			$(".time2").html("Time Remaining: " + gameState.timeRemaining.timeCounter + " Seconds");
			gameState.timeRemaining.timeCounter --;
			if (gameState.timeRemaining.timeCounter <= -1) {
				timeIsUp ();
			}};
		}, 1000)
	}

	

	
};

// Need to figure out how to get option to recognize it's the correct option
// Selecting a "package" of content in the array


nextQuestion();
renderScoreboard();
$(".answer1").click(function(){
	if (gameState.currentChoices[0]===gameState.currentAnswer) {
		returnCorrect();
	}
	else {
		returnWrong();
	}
	renderScoreboard();
});

$(".answer2").click(function(){
	if (gameState.currentChoices[1]===gameState.currentAnswer) {
			returnCorrect();
	}
	else {
		returnWrong();
	}
	renderScoreboard();
});

$(".answer3").click(function(){
	if (gameState.currentChoices[2]===gameState.currentAnswer) {
			returnCorrect();
	}
	else {
		returnWrong();
	}
	renderScoreboard();
});

$(".answer4").click(function(){
	if (gameState.currentChoices[3]===gameState.currentAnswer) {
		returnCorrect();
	}
	else {
		returnWrong();
	}
	renderScoreboard();
});

// var selection = content[Math.floor(Math.random()*5)];
// console.log(selection);
// gameState.currentQuestion = selection.question;
// gameState.currentAnswer = selection.correctAnswer;
// gameState.currentChoices = selection.answers;


function nextQuestion () {
	if (gameState.counter < 5) {	
		var selection = gameState.content[gameState.counter];
		gameState.currentQuestion = selection.question;
		gameState.currentAnswer = selection.correctAnswer;
		gameState.currentChoices = selection.answers;
		gameState.timeFreeze = false;
		gameState.timeRemaining.timeCounter = 10;
		renderScoreboard();
	}
		
	else {
		gameState.currentQuestion = "All done. Here is how you did!";
		gameState.currentChoices = "";

		var questionCurrent = $(".question").html(gameState.currentQuestion);
		$(".answers").css("background-color", "yellow");
		$(".answers").css("border", "none");
		var option1 = $(".answer1").html("");
		var option2 = $(".answer2").html("Correct Answers: " + gameState.correctAnswers);
		var option3 = $(".answer3").html("Incorrect Answers: " + gameState.wrongAnswers);
		var option4 = $(".answer4").html("Unanswered: " + gameState.unanswered);
		console.log(gameState.correctAnswers);

		var restartButton = $("<button>");
						restartButton.addClass("btn btn-danger");
						restartButton.text("Restart");
						// assigning restart button variable to an html element div so it renders on webpage:
						$(".restart").html(restartButton);
	}

}

// Render Scoreboard!!!


function renderScoreboard () {
	var questionCurrent = $(".question").html(gameState.currentQuestion);
	var option1 = $(".answer1").html(gameState.currentChoices[0]);
	var option2 = $(".answer2").html(gameState.currentChoices[1]);
	var option3 = $(".answer3").html(gameState.currentChoices[2]);
	var option4 = $(".answer4").html(gameState.currentChoices[3]);
	// setTimeout
	// var time = $(".time2").html(setTimeout(function(){"Time Remaining: " + gameState.timeRemaining.timeCounter + " Seconds"}, 1000));
	console.log(gameState.correctAnswers);

}






function returnCorrect () {
	fiveSeconds();
	console.log("Correct!");
	// reset timer
	gameState.currentQuestion = "Correct!";
	gameState.currentChoices = "";
	var resourceGIF = $("<img>");
	resourceGIF.attr("src", gameState.correctGIFS[gameState.correctAnswers]);
	gameState.counter ++;
	gameState.correctAnswers ++;
	gameState.timeFreeze = true;
	gameState.timeRemaining.timeCounter = $("time2").text();
	gameState.timeFreeze = true;
	

	var questionCurrent = $(".question").html(gameState.currentQuestion);
	var option1 = $(".answer1").html(resourceGIF);
	var option2 = $(".answer2").html("");
	var option3 = $(".answer3").html("");
	var option4 = $(".answer4").html("");
	console.log(gameState.correctAnswers);
} 

function returnWrong () {
	fiveSeconds();
	console.log("Wrong!");
	// reset timer
	gameState.currentQuestion = "Wrong!";
	gameState.currentChoices = "";
	var resourceGIF = $("<img>");
	resourceGIF.attr("src", gameState.wrongGIFS[gameState.wrongAnswers]);
	gameState.counter ++;
	gameState.wrongAnswers ++;
	gameState.timeFreeze = true;
	

	var questionCurrent = $(".question").html(gameState.currentQuestion);
	var option1 = $(".answer1").html(resourceGIF);
	var option2 = $(".answer2").html("");
	var option3 = $(".answer3").html("");
	var option4 = $(".answer4").html("");
	console.log(gameState.correctAnswers);

	// set a timer, then need to trigger function next question
} 


	function timeIsUp () {
		fiveSeconds();
		console.log("Time is up!");
		gameState.currentQuestion = "Out of Time!";
		gameState.currentChoices = "";
		var resourceGIF = $("<img>");
		resourceGIF.attr("src", "assets/images/maddonTime.gif");
		gameState.counter ++;
		gameState.unanswered ++;
		gameState.timeFreeze = true;
		

		var questionCurrent = $(".question").html(gameState.currentQuestion);
		var option1 = $(".answer1").html(resourceGIF);
		var option2 = $(".answer2").html("");
		var option3 = $(".answer3").html("");
		var option4 = $(".answer4").html("");
		console.log(gameState.correctAnswers);
	}


	function fiveSeconds () {
		setTimeout(function(){
		nextQuestion();
	}, 1000 * 5);
	}

	
	// function countdown = for (var i = 0; i < 30; i++) {
	// setTimeout(function() {
	// 	console.log("lower!")
	// 	i++
	// }, 1000 * 1);
	// };



// Timer bit:
// var start = new Date;

// setInterval(function() {
//     ((new Date - start) / 1000 + " Seconds");
// }, 1000);

// console.log(setInterval);

