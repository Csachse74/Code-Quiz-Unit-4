var timerElement = document.querySelector("#timer");
var welcomePage = document.querySelector("#welcome");
var quizPage = document.querySelector("#quiz");
var startButton = document.querySelector("#start-button");

var timer;
var timerCount = 75;

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            // if (isWin && timerCount > 0) {
            //     clearInterval(timer);
            //     winGame();
            // }
        }
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

var questions = {
    question1: {
        question: "Commonly used data types DO NOT include:"
        , answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"]
        , correct: "3. alerts"
    }
    , question2: {
        question: "The condition in an if/else statement is enclosed within ______."
        , answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"]
        , correct: "3. parentheses"
    }
    , question3: {
        question: "Arrays in JavaScript can be used to store ______."
        , answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]
        , correct: "4. all of the above"
    }
    , question4: {
        question: "String values must be enclosed within ______ when being assigned to variables."
        , answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"]
        , correct: "3. quotes"
    }
    , question5: {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:"
        , answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"]
        , correct: "4. console log"
    }
}

function init() {

}

function startQuiz() {
    welcomePage.style.display = "none";
    quizPage.style.display = "block";
    startTimer();
    
}

startButton.addEventListener("click", startQuiz)