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

/////// Variables ////////
var secondsLeft = 100;
var currentSection = sectionStart;
var timerInterval;

/////// Functions ////////
// Timer function
function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerDisplay.textContent = "time: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Call Function to close game 
            gameOver();
        }

    }, 1000);
}

// Function wrong answer -> lose time
var loseTime = function () {
    if ((secondsLeft - 10) <= 0) {
        secondsLeft = 0;
        gameOver();
        timerDisplay.textContent = 'Time: 0';
    } else {
        secondsLeft -= 10;
    }
}

// Init function 
var init = function () {
    secondsLeft = 100;
    sectionStart.setAttribute('class', 'visible');
}

// Game over function
var gameOver = function () {
    currentSection.setAttribute('class', 'hidden');
    sectionDone.setAttribute('class', 'visible');
    scoreDisplay.textContent = 'Your final score is ' + secondsLeft;
    clearInterval(timerInterval);
}



/////// Event listeners ////////
btnStart.addEventListener('click', function () {
    setTime();
    sectionStart.setAttribute('class', 'hidden');
    sectionQ1.setAttribute('class', 'visible');
});

highScoresBtn.addEventListener('click', function () {
    // hide current section
    currentSection.setAttribute('class', 'hidden');
    // show high-scores section
    sectionHighScores.setAttribute('class', 'visible');
    // clear interval
    clearInterval(timerInterval);
    timerDisplay.textContent = 'Time: 0';
})

sectionQ1.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");
    if (number === '3') {
        sectionQ1.setAttribute('class', 'hidden');
        sectionQ2.setAttribute('class', 'visible');
        currentSection = sectionQ2;
    } else {
        loseTime();
        feedback.innerHTML = 'Wrong!';
        feedback.setAttribute('class', 'visible');
        currentSection = sectionQ1;
    }
});

sectionQ2.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '3') {
        sectionQ2.setAttribute('class', 'hidden');
        sectionQ3.setAttribute('class', 'visible');
        currentSection = sectionQ3;
    } else {
        loseTime();
        currentSection = sectionQ2;
    }
});

sectionQ3.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '4') {
        sectionQ3.setAttribute('class', 'hidden');
        sectionQ4.setAttribute('class', 'visible');
        currentSection = sectionQ4;
    } else {
        loseTime();
        currentSection = sectionQ3;
    }
});

sectionQ4.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '3') {
        sectionQ4.setAttribute('class', 'hidden');
        sectionQ5.setAttribute('class', 'visible');
        currentSection = sectionQ5;
    } else {
        loseTime();
        currentSection = sectionQ4;
    }
});

sectionQ5.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");
    currentSection = sectionQ5;
    if (number === '4') {
        gameOver();
    } else {
        loseTime();
    }
});