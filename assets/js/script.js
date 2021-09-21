var timerElement = document.querySelector("#timer");
var welcomePage = document.querySelector("#welcome");
var question1 = document.querySelector(".divquestion[questionNumber='1']");
var question2 = document.querySelector(".divquestion[questionNumber='2']");
var startButton = document.querySelector("#start-button");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var chosenAnswer = document.querySelector(".answer");

var timer;
var timerCorrect;
var timerIncorrect;
var timerCount = 75;
var questionNum = 1;
var answerNum = 0;

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function correctAnswer() {
    timerCorrect = setTimeout(function () {
        if (document.querySelector("#correct").style.display == "block") {
            document.querySelector("#correct").style.display = "none"
        }
    }, 1500)
}

function incorrectAnswer() {
    timerIncorrect = setTimeout(function () {
        if (document.querySelector("#incorrect").style.display == "block") {
            document.querySelector("#incorrect").style.display = "none"
        }
    }, 1500)
}

var questions = ["3. alerts", "3. parentheses", "4. all of the above", "3. quotes", "4. console log"]

function init() {

}

function startQuiz() {
    welcomePage.style.display = "none";
    question1.style.display = "block";
    startTimer();
}

startButton.addEventListener("click", startQuiz)


function answerCheck(value) {
    if (questions[answerNum] === value) {
        document.querySelector("#correct").style.display = "block"
        nextQuestion();
        correctAnswer();
    } else {
        timerCount = timerCount - 10;
        document.querySelector("#incorrect").style.display = "block"
        nextQuestion();
        incorrectAnswer();
    }
}

document.querySelector("#answer1").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer2").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer3").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer4").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer5").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer6").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer7").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer8").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer9").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer10").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer11").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer12").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer13").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer14").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer15").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer16").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer17").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer18").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer19").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});
document.querySelector("#answer20").addEventListener("click", function (e) {
    answerCheck(e.target.innerText)
});

function nextQuestion() {
    document.querySelector(".divquestion[questionNumber='" + questionNum + "']").style.display = "none"
    questionNum++;
    if (questionNum < 6) {
        document.querySelector(".divquestion[questionNumber='" + questionNum + "']").style.display = "block"
        answerNum++;
    } else {
        document.querySelector("#submit").style.display = "block";
        document.querySelector("#finalScore").textContent = "    " + timerCount;
        clearInterval(timer);
    }
}

document.querySelector("#btn-submit").addEventListener("click", function(e) {
    debugger;
    var initials = document.querySelector("#highscore").value;
    localStorage.setItem("highscore", "" + initials + "-" + timerCount)
})


