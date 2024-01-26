const quizData = [
  {
    question: "1. It is the science of correctness or incorrectness of reasoning, or the study of the evaluation of arguments.",
    options: ["Logic", "Epistemology", "Fallacy", "Pagmamasid"],
    answer: "Logi "
  },
  {
    question: "2.	It is a sequence of statements trying to prove something.",
    options: ["Fallacy", "Argument", "Logic", "Premise"],
    answer: "Argument"
    
  },
  {
    question: "3.	It is the series of statements called the premises, intended to determine the truth of another statement, the conclusion.",
    options: ["Premise", "Conclusions", "Fallacy", "Argument"],
    answer: "Argument"
    
  },
  {
    question: "4. These are statements in an argument that are intended to provide the support.",
    options: ["Logic", "Argument", "Premises", "Conclusion"],
    answer: "Premises"
    
  },
  {
    question: "5.	It is that statement for the premises are intended to provide support.",
    options: ["Logic", "Argument", "Premises", "Conclusion"],
    answer: "Conclusion"
    
  },
  {
    question: "6.	The statement in an argument that provides reason or support for the conclusion.",
    options: ["Logic", "Argument", "Premises", "Lagum"],
    answer: "Premises"
    
  },
  {
    question: "7.	Statement for which the premises are intended to provide support.",
    options: ["Logic", "Argument", "Premises", "Conclusion"],
    answer: "Conclusion"
    
  },
  {
    question: "8.	Provides all the information needed to prove its conclusion.",
    options: ["Valid Argument", "Invalid Argument", "Unvalid Argument", "Non-valid Argument"],
    answer: "Valid Argument"
    
  },
  {
    question: "9.	One whose conclusion is not proven by its premises.",
    options: ["Valid Argument", "Invalid Argument", "Unvalid Argument", "Non-valid Argument"],
    answer: "Memorandum"
    
  },
  {
    question: "10.	If all premises are true, the conclusion could still be false.",
    options: ["Valid Argument", "Invalid Argument", "Unvalid Argument", "Non-valid Argument"],
    answer: "Invalid Argument"
    
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 180;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerHTML = currentQuizData.question;

  optionsElement.innerHTML = "";
  currentQuizData.options.forEach(option => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];
  if (answer === currentQuizData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="main.html">Back</a><details><h3>Answers</h3><li>.Logic</li><li>2.Argument</li><li>3.Argument</li><li>4.Premises</li><li>5.Conclusion</li><li>6.Premises</li><li>7.Conclusion</li><li>8.Valid Argument</li><li>9.Invalid Argument</li><li>10.Invalid Argument</li></details>`;
}

function countdown() {
  const timerElement = document.getElementById("time");
  const timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    } else {
      timeLeft--;
      timerElement.textContent = `${timeLeft}s`;
    }
  }, 1000);
}

displayQuestion();
countdown();
