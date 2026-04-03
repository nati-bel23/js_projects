const questions = [
    {
        question: "What is the capital of Ethiopia?",
        answers: [
            { text: "Addis Ababa", correct: true },
            { text: "Nairobi", correct: false },
            { text: "Cairo", correct: false },
            { text: "Khartoum", correct: false }
        ]   
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [  
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
        },
    {
        question: "What is the chemical symbol for gold?",
        answers: [  
            { text: "Ag", correct: false },
            { text: "Au", correct: true },
            { text: "Fe", correct: false },
            { text: "Pb", correct: false }
        ]
    } 


];
const questionElement = document.getElementById("question");
const answerButton  = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    if(answerButton.children.length > 0){
        resetAnswerButtons();
    }
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
     
});
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore() {
    
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    resetAnswerButtons();
    nextButton.style.display = "block";
}
function resetAnswerButtons(){
            Array.from(answerButton.children).forEach(button => {
            answerButton.removeChild(button);
        });
}
function handleNextButton() {
    currentQuestionIndex++;


    if(currentQuestionIndex < questions.length) {
        resetAnswerButtons();
        showQuestion();
    }
        else{
            showScore();
        };
    }

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    
    } else {
        startQuiz();
    }
});



startQuiz();

