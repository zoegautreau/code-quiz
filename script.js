// variables to select items in html
var startButton = document.getElementById("start-button")
var nextButton = document.getElementById("next-button")
var timeLeft = document.querySelector(".timer-count");
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex;
var currentTime;


function rulesConfirm() {
    confirm("1. You have 60 seconds to answer 5 JavaScript-related questions.\ 2. Each wrong answer subtracts 10 seconds from your total time.\ 3. Your final score will be the time remaining at the end of the quiz.\ 4. When the quiz is complete, enter your initials to be placed on the highscores page."); 
    if(confirm) {
    startPage();    
    }
}

// starts quiz when "start" button is clicked
function startPage() {
   startButton.addEventListener("click", startQuiz); 
}

// when the "start" button is clicked this function is called and the quiz starts
function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    // var timerId = setInterval(countDown, 1000)
    setNextQuestion();
}

// proceeds to next question when "next" button is clicked
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

// timer/countdown function
function countDown() {
    currentTime--;
    timerLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId);
    }
}



function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')  
    } else {
        startButton.classList.remove("hide");
        startButton.textContent = "Restart";
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'alerts', correct: true},
            { text: 'strings', correct: false},
            { text: 'booleans', correct: false},
            { text: 'numbers', correct: false}
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within:',
        answers: [
            { text: 'quotes', correct: false},
            { text: 'curly brackets', correct: false},
            { text: 'parentheses', correct: true},
            { text: 'square brackets', correct: false}
        ]
    },
    {
        question: '"Array" in JavaScript can be used to store:',
        answers: [
            { text: 'numbers & strings', correct: false},
            { text: 'other arrays', correct: false},
            { text: 'booleans', correct: false},
            { text: 'all of the above', correct: true}
        ]
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        answers: [
            { text: 'commas', correct: false},
            { text: 'quotes', correct: true},
            { text: 'curly brackets', correct: false},
            { text: 'parentheses', correct: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging to print content to the debugger is:',
        answers: [
            { text: 'JavaScript', correct: false},
            { text: 'console.log', correct: true},
            { text: 'terminal/bash', correct: false},
            { text: 'for loops', correct: false}
        ]
    },
]

//function startPrompt() {
   //timerElement.classList.add('hide')
  // 
//}

// The quizScore function is called when all questions are answered
//function quizOver() {
    //startButton.classList.add('hide')
    //answerButtonsElement.classList.add('hide')
    //questionElement.classList.add('hide')
   // questionContainerElement.textContent = 'Your score is ' + timerCount;
    // initials prompt function
  //}

//initials prompt function then score board

// The timesUp function is called when timer reaches 0
//function timesUp() {
//    questionContainerElement.textContent = "Times up! Try again to submit a score!";
  //  startButton.disabled = false;
    //restartQuiz();
  //}

//function restartQuiz() {
  // startPrompt();
//}
  
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
//function startTimer() {
    // Sets timer
  //  timer = setInterval(function() {
    //    timerCount--;
      //  timerElement.textContent = timerCount;
        //if (shuffledQuestions.length = currentQuestionIndex && timerCount > 0) {
          // Clears interval and stops timer
          //clearInterval(timer);
          //quizOver();
        //} else if (timerCount === 0) {
        // Clears interval
        //clearInterval(timer);
        //timesUp();
      //}
    //}, 1000);
//}