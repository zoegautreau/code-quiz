// variables to select items in html
var startButton = document.getElementById("start-button")
var nextButton = document.getElementById("next-button")
var timerEl = document.getElementById('countdown');
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')


var shuffledQuestions, currentQuestionIndex;


// Asks user to confirm understaning of the rules then starts quiz from start button
function rulesConfirm() {
    confirm("1. You have 60 seconds to answer 5 JavaScript-related questions.\ 2. Each wrong answer subtracts 10 seconds from your total time.\ 3. Your final score will be the time remaining at the end of the quiz.\ 4. When the quiz is complete, enter your initials to be placed on the highscores page."); 
    if(confirm) {
    startPage();    
    }
}

// Starts quiz when "start" button is clicked
function startPage() {
   startButton.addEventListener("click", startQuiz); 
}

// When the "start" button is clicked this function is called and the quiz starts
function startQuiz() {
    countdown();
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion();
}

// Proceeds to next question when "next" button is clicked
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

// Timer that counts down from 5
function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else if (correct != true) {
        timeLeft = timeLeft - 10;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';

        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);

        // Call the `displayMessage()` function
        // displayMessage();}
      }
    }, 1000);
  }

// Resets state and displays next question
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Shuffles the questions and presents them randomly
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

// Resets state
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

// Allows user to select answers till the questions run out
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

// setStatusClass
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

// clearStatusClass
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// Series of questions for the quiz shuffled at random
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
