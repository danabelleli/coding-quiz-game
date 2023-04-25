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
var initials = document.querySelector('#initials');
var ulHighScore = document.querySelector('.high-scores-list');
var formBtn = document.querySelector('.form-btn');
var btnBack = document.querySelector('#btn-back');
var btnClear = document.querySelector('#btn-clear');

/////// Variables ////////
var secondsLeft = 100;
var currentSection = sectionStart;
var timerInterval;
var highScores = [];

/////// Functions ////////
// Timer 
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

// Lose time 
var loseTime = function () {
    if ((secondsLeft - 10) <= 0) {
        secondsLeft = 0;
        gameOver();
        timerDisplay.textContent = 'Time: 0';
    } else {
        secondsLeft -= 10;
    }
}

// Init  
var init = function () {
    secondsLeft = 100;
    sectionStart.setAttribute('class', 'visible');
}

// Game over 
var gameOver = function () {
    currentSection.setAttribute('class', 'hidden');
    sectionDone.setAttribute('class', 'visible');
    scoreDisplay.textContent = 'Your final score is ' + secondsLeft;
    clearInterval(timerInterval);
}

// Set value in local storage
var setHighScores = function () {
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

// Render values from local storage 
var renderHighScores = function () {
    // Get the local storage values
    highScores = JSON.parse(localStorage.getItem('highScores'));

    // Clean old item list 
    ulHighScore.innerHTML = '';

    // Add innitials to list
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement('li');
        li.textContent = highScores[i];
        li.setAttribute('data-index', i);
        li.setAttribute('class', 'high-scores-item');

        ulHighScore.appendChild(li);
    }
}

// Clear high scores
var clearHighScores = function () {
    // clear data from local storage
    localStorage.setItem('highScores', JSON.stringify([]));
    // clear data from render
    renderHighScores();
}

// Going back to main page
var backToMain = function () {
    currentSection = sectionStart;
    sectionHighScores.setAttribute('class', 'hidden');
    sectionStart.setAttribute('class', 'visible');
    timerDisplay.textContent = 'Time: 100';
    secondsLeft = 100;
}

// New functions to work with
var feedbackCorrect = function () {
    feedback.innerHTML = 'Correct!';
    feedback.setAttribute('class', 'feedback visible');

}

var hideMsg = function () {
    feedback.setAttribute('class', 'feedback hidden');
}

var feedbackWrong = function () {
    feedback.innerHTML = 'Wrong!';
    feedback.setAttribute('class', 'feedback visible');
}




/////// Event listeners ////////
btnStart.addEventListener('click', function () {
    setTime();
    sectionStart.setAttribute('class', 'hidden');
    sectionQ1.setAttribute('class', 'visible');
    currentSection = sectionQ1;
});

highScoresBtn.addEventListener('click', function () {
    // hide current section
    currentSection.setAttribute('class', 'hidden');
    // show high-scores section
    sectionHighScores.setAttribute('class', 'visible');
    // clear interval
    clearInterval(timerInterval);
    timerDisplay.textContent = 'Time: 0';
    // show list of high scores
    renderHighScores();
})

sectionQ1.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");
    if (number === '3') {
        currentSection = sectionQ2;
        sectionQ1.setAttribute('class', 'hidden');
        sectionQ2.setAttribute('class', 'visible');
    } else {
        loseTime();
        currentSection = sectionQ1;
    }
});

sectionQ2.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '3') {
        currentSection = sectionQ3;
        sectionQ2.setAttribute('class', 'hidden');
        sectionQ3.setAttribute('class', 'visible');
    } else {
        loseTime();
        currentSection = sectionQ2;
    }
});

sectionQ3.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '4') {
        currentSection = sectionQ4;
        sectionQ3.setAttribute('class', 'hidden');
        sectionQ4.setAttribute('class', 'visible');
    } else {
        loseTime();
        currentSection = sectionQ3;
    }
});

sectionQ4.addEventListener('click', function (event) {
    var element = event.target;
    var number = element.getAttribute("data-number");

    if (number === '3') {
        currentSection = sectionQ5;
        sectionQ4.setAttribute('class', 'hidden');
        sectionQ5.setAttribute('class', 'visible');
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

formBtn.addEventListener('click', function (event) {
    event.preventDefault();
    var highScoreText = initials.value + ' - ' + secondsLeft;
    if (highScoreText === '') {
        return;
    } else {
        // check if local storage exist 
        if (localStorage.getItem('highScores') !== null) {
            highScores = JSON.parse(localStorage.getItem('highScores'));
        }
        highScores.push(highScoreText.toUpperCase());
        initials.value = '';
        setHighScores();
        renderHighScores();
    }
    sectionDone.setAttribute('class', 'hidden');
    sectionHighScores.setAttribute('class', 'visible');
});

btnBack.addEventListener('click', backToMain);
btnClear.addEventListener('click', clearHighScores);





