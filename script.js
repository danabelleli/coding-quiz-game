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

// display next Q function







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
