/////// Selected elements ////////
var btnStart = document.querySelector('.start__btn');
var highScoresBtn = document.querySelector('#high-scores-btn');
var timerDisplay = document.querySelector('#timer');
var sectionStart = document.querySelector('.start');
var sectionQ1 = document.querySelector('.question-01');
var sectionQ2 = document.querySelector('.question-02');
var sectionQ3 = document.querySelector('.question-03');
var sectionQ4 = document.querySelector('.question-04');
var sectionQ5 = document.querySelector('.question-05');
var sectionDone = document.querySelector('.done');
var sectionHighScores = document.querySelector('.high-scores');
var feedback = document.querySelector('.feedback');
var scoreDisplay = document.querySelector('#score');

/////// variables ////////
var secondsLeft = 100;
var currentSection;

/////// Functions ////////
// Timer function
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerDisplay.textContent = "time: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }

    }, 1000);
}

// function wrong answer -> lose time
var loseTime = function () {
    secondsLeft -= 10;
}

// init function 
var init = function () {
    secondsLeft = 100;
    sectionStart.setAttribute('class', 'visible');
}

// game over fucntion
var gameOver = function () {
    if (secondsLeft === 0) {
        // hide current section

        // show section done

        // display score 
    } else if (sectionDone.classList.includes('visible')) {
        scoreDisplay.textContent = 'Your final score is' + secondsLeft;
    }
}



/////// Event listeners ////////
btnStart.addEventListener('click', function () {
    setTime();
    sectionStart.setAttribute('class', 'hidden');
    sectionQ1.setAttribute('class', 'visible');
});

highScoresBtn.addEventListener('click', function () {
    // hide current section

    // show high-scores section
})

sectionQ1.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");
    if (number === '3') {
        sectionQ1.setAttribute('class', 'hidden');
        sectionQ2.setAttribute('class', 'visible');
    } else {
        loseTime();
        feedback.innerHTML = 'Wrong!';
        feedback.setAttribute('class', 'visible');
    }
});

sectionQ2.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '3') {
        sectionQ2.setAttribute('class', 'hidden');
        sectionQ3.setAttribute('class', 'visible');
    } else {
        loseTime();
    }
});

sectionQ3.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '4') {
        sectionQ3.setAttribute('class', 'hidden');
        sectionQ4.setAttribute('class', 'visible');
    } else {
        loseTime();
    }
});

sectionQ4.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '3') {
        sectionQ4.setAttribute('class', 'hidden');
        sectionQ5.setAttribute('class', 'visible');
    } else {
        loseTime();
    }
});

sectionQ5.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '4') {
        sectionQ5.setAttribute('class', 'hidden');
        sectionDone.setAttribute('class', 'visible');
    } else {
        loseTime();
    }
});