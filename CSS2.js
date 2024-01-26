const quizData = [
  {
    question: "1. It is the set of instruction of a computer.",
    options: ["Program", "Programming", "Software", "Commands"],
    answer: "Program"
  },
  {
    question: "2.	It is the machine language representation of the source code.",
    options: ["Support Module", "Data Module", "Object Code", "Linker"],
    answer: "Object Code"
    
  },
  {
    question: "3.	A formal language that will be used to direct instructions to the computer.",
    options: ["Java", "Programming Language", "SDLC", "Bytecode"],
    answer: "Programming"
    
  },
  {
    question: "4. It is the process of performing particular computations.",
    options: ["Computer Programming", "Programming Language", "Java", "Bytecode"],
    answer: "Computer Programming"
    
  },
  {
    question: "5.	Electronic device capable of performing complex computations in a short time.",
    options: ["Computer", "Hardware", "Program", "Java"],
    answer: "Computer"
    
  },
  {
    question: "6.	Craft of implementing interrelated abstract algorithms using a programming language to produce a computer program.",
    options: ["Program", "Programming", "Bit", "Software"],
    answer: "Programming"
    
  },
  {
    question: "7.	One or more computer programs and data in the computer.",
    options: ["Program", "Programming", "Bit", "Software"],
    answer: "Software"
    
  },
  {
    question: "8.	Manipulation of “on” and “off” signals to perform complex tasks.",
    options: ["Data Representation", "Digital Electronics", "Digital Device", "Analog Device"],
    answer: "Digital Electronics"
    
  },
  {
    question: "9.	Works with continuous changing data, data transfer through waves.",
    options: ["Data Representation", "Digital Electronics", "Digital Device", "Analog Device"],
    answer: "Analog Device"
    
  },
  {
    question: "10.	Works with discrete signals, such as 0 and 1 or on and off system.",
    options: ["Data Representation", "Digital Electronics", "Digital Device", "Analog Device"],
    answer: "Digital Device"
    
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
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="main.html">Back</a><details><h3>Answers</h3><li>1.Program</li><li>2.Object Code</li><li>3.Programming</li><li>4.Computer Programming</li><li>5.Computer</li><li>6.Programming</li><li>7.Software</li><li>8.Digital Electronics</li><li>9.Analog Device</li><li>10.Digital Device</li></details>`;
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
