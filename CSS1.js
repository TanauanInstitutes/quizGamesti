const quizData = [
  {
    question: "1. It is the collection of organized data.",
    options: ["Data", "Database Systems", "Data Management System", "Database"],
    answer: "Database Systems"
  },
  {
    question: "2.	It is the systematic collection of data.",
    options: ["Data", "Database Systems", "Data Management System", "Database"],
    answer: "Database"
    
  },
  {
    question: "3.	It is the facts related to any object inconsideration like name, age, and pdf.",
    options: ["Data", "Database Systems", "Data Management System", "Database"],
    answer: "Data"
    
  },
  {
    question: "4. All of the choices are parts of the five major parts of a database system, except for one.",
    options: ["People", "Procedures", "Data", "System"],
    answer: "System"
    
  },
  {
    question: "5.	Used by a manager of any small organization to track necessary data.",
    options: ["Database Systems", "Data Management System", "File Systems", "Digital Systems"],
    answer: "File Systems"
    
  },
  {
    question: "6.	Computerized system to maintain information and make it available on demand.",
    options: ["Database Systems", "Data Management System", "File Systems", "Digital Systems"],
    answer: "Database Systems"
    
  },
  {
    question: "7.	It is the loose collection of information.",
    options: ["Structured Database", "Free-form Database", "Operational Database", "Analytical Database"],
    answer: "Free-form Database"
    
  },
  {
    question: "8.	Info is arranged in a uniform format.",
    options: ["Structured Database", "Free-form Database", "Operational Database", "Analytical Database"],
    answer: "Structured Database"
    
  },
  {
    question: "9.	Static database, data rarely modified, store historic data.",
    options: ["Structured Database", "Free-form Database", "Operational Database", "Analytical Database"],
    answer: "Analytical Database"
    
  },
  {
    question: "10. Dynamic database used in day-to-day operation.",
    options: ["Structured Database", "Free-form Database", "Operational Database", "Analytical Database"],
    answer: "Operational Database"
    
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
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="main.html">Back</a><details><h3>Answers</h3><li>1.Database Systems</li><li>2.Database</li><li>3.Data</li><li>4.System</li><li>5.File Systems</li><li>6.Database Systems</li><li>7.Free-form Database</li><li>8.Structured Database</li><li>9.Analytical Database</li><li>10.Operational Database</li></details>`;
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

