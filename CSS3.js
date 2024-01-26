const quizData = [
  {
    question: "1. It is the concept of hiding internal implementation details and exposing only the required functionalities to the end user.",
    options: ["Inheritance", "Polymorphism", "Abstraction", "Encapsulation"],
    answer: "Abstraction"
  },
  {
    question: "2.	Stand- alone program that does not need a browser to run.",
    options: ["Java Virtual Machine", "Applet", "Application", "Robust Language"],
    answer: "Application"
    
  },
  {
    question: "3.	High level programming language.",
    options: ["Java", "Bytecode", "OAK", "Java API"],
    answer: "Java"
    
  },
  {
    question: "4. Computer object code that an interpreter converts into binary machine code so it can be read by a computer’s hardware processor.",
    options: ["Java", "Bytecode", "OAK", "Java API"],
    answer: "Bytecode"
    
  },
  {
    question: "5.	Ito ay isang uri ng lagom na karaniwang ginagamit sa akademikong papel.",
    options: ["Java Runtime Environment", "Java Virtual Machine", "Java Development Environment", "Java Applet"],
    answer: "Java Virtual Machine"
    
  },
  {
    question: "6.	Specifier that allocates different sizes and types of values that can be stored in a variable.",
    options: ["Applet", "Identifiers", "Java Program Cycle", "Data types"],
    answer: "Data types"
    
  },
  {
    question: "7.	Name of the variable that the programmer indicated.",
    options: ["Applet", "Identifiers", "Java Program Cycle", "Data types"],
    answer: "Identifiers"
    
  },
  {
    question: "8.	Used to read and write to the variable.",
    options: ["Applet", "Identifiers", "Java Program Cycle", "Data types"],
    answer: "Identifiers"
    
  },
  {
    question: "9.	It is the command-line interface.",
    options: ["Java Runtime Environment", "Java Virtual Machine", "Java Development Environment", "Java Development Cycle"],
    answer: "Java Development Environment"
    
  },
  {
    question: "10.	It holds true or false.",
    options: ["Characters", "String", "Boolean", "Floating Point"],
    answer: "Boolean"
    
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
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="main.html">Back</a><details><h3>Answers</h3><li>1.Abstraction</li><li>2.Application</li><li>3.Java</li><li>4.Bytecode</li><li>5.Java Virtual Machine</li><li>6.Data types</li><li>7.Identifiers</li><li>8.Identifiers</li><li>9.Java Development Environment</li><li>10.Boolean</li></details>`;
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
