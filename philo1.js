const quizData = [
  {
    question: "1. All are part of the branches of philosophy, unless to ____.",
    options: ["Logic", "Politics", "Epistemology", "Technology"],
    answer: "Technology"
  },
  {
    question: "2.	It is also known as the “study of behaviour/action”.",
    options: ["Logic", "Politics", "Epistemology", "Technology"],
    answer: "Epistemology"
    
  },
  {
    question: "3.	These two are also known as cognitive branches of the philosophy.",
    options: ["Ethics and Logic", "Metaphysics and Epistemology", "Epistemology and Ethics", "Logic and Politics"],
    answer: "Metaphysics and Epistemology"
    
  },
  {
    question: "4. It is a process of thinking about something in a logical way in order to form conclusion or judgement.",
    options: ["Logic", "Politics", "Metaphysics", "Epistemology"],
    answer: "Logic"
    
  },
  {
    question: "5.	It is also known as “The Study of Knowledge”.",
    options: ["Metaphysics", "Logic", "Epistemology", "Politics"],
    answer: "Epistemology"
    
  },
  {
    question: "6.	It is also known as “The Study of Existence”.",
    options: ["Metaphysics", "Logic", "Epistemology", "Politics"],
    answer: "Metaphysics"
    
  },
  {
    question: "7.	It is the branch of philosophy that studies the nature and scopes of knowledge.",
    options: ["Metaphysics", "Logic", "Epistemology", "Politics"],
    answer: "Epistemology"
    
  },
  {
    question: "8.	It is concerned with morality, how one should live and upon what basis to make decisions.",
    options: ["Aesthetic", "Logic", "Metaphysics", "Ethics"],
    answer: "Ethics"
    
  },
  {
    question: "9.	It is the matter of pertaining on the human thought.",
    options: ["Metaphysics", "Logic", "Epistemology", "Politics"],
    answer: "Logic"
    
  },
  {
    question: "10.	It is the systematized body of knowledge but unlike other sciences which employs observation and experimentation to prove their theories.",
    options: ["Metaphysics", "Logic", "Epistemology", "Philosophy"],
    answer: "Philosophy"
    
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
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="main.html">Back</a><details><h3>Answers</h3><li>1.Technology</li><li>2.Epistemology</li><li>Metaphysics and Epistemology</li><li>4.Logic</li><li>5.Epistemology</li><li>6.Metaphysics</li><li>7.Epistemology</li><li>8.Ethics</li><li>9.Logic</li><li>10.Philosophy</li></details>`;
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
