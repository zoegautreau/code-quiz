var startButton = document.getElementById("start-button")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide')
    setNextQuestion();
}

function setNextQuestion() {
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

function selectAnswer() {

}

var questions = [
    {
        question: "?",
        answers: [
            { text: 'correct answer', correct: true},
            { text: 'wrong answers', correct: false},
            { text: 'wrong answers', correct: false},
            { text: 'wrong answers', correct: false}
        ]
    }
]