let currentQuestion = 0;
let score = 0;

const questions = [
  {
      question: "What is the square root of 144?",
      choices: ["10", "12", "14", "16"],
      answer: 1
  },
  {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      choices: ["Harper Lee", "Mark Twain", "J.D. Salinger", "John Steinbeck"],
      answer: 0
  },
  {
      question: "What is the capital of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: 2
  },
  {
      question: "Who discovered penicillin?",
      choices: ["Marie Curie", "Albert Einstein", "Alexander Fleming", "Isaac Newton"],
      answer: 2
  },
  {
      question: "What is the tallest mountain in the world?",
      choices: ["K2", "Mount Everest", "Kilimanjaro", "Mount Fuji"],
      answer: 1
  }
];

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestion].question;

    const answerChoices = document.getElementById('answer-choices');
    answerChoices.innerHTML = ""; 

    questions[currentQuestion].choices.forEach((choice, index) => {
        const choiceElement = document.createElement('li');
        choiceElement.textContent = choice;
        choiceElement.addEventListener('click', () => checkAnswer(index));
        answerChoices.appendChild(choiceElement);
    });

    const nextButton = document.getElementById('next-question');
    nextButton.disabled = false;
    nextButton.style.opacity = 1; 
}

function checkAnswer(selectedChoice) {
    const correctAnswer = questions[currentQuestion].answer;
    const feedbackElement = document.getElementById('feedback');

    if (selectedChoice === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = `Incorrect. The correct answer is "${questions[currentQuestion].choices[correctAnswer]}".`;
    }

    showNextButton();
}

function showNextButton() {
    const nextButton = document.getElementById('next-question');

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Finish Quiz"; 
    } else {
        nextButton.textContent = "Next Question";
    }

    nextButton.addEventListener('click', nextQuestion);
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) { 
        currentQuestion++;
        displayQuestion();
    } else {
        showResults(); 
    }
}

function showResults() {
    alert(`You've finished the quiz. Your score is ${score} out of ${questions.length}.`);
}

document.getElementById('next-question').addEventListener('click', nextQuestion);

function initializeQuiz() {
    displayQuestion();  
    showNextButton(); 
}

initializeQuiz(); 
