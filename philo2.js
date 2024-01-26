const quizData = [
  {
    question: "1. It is a type of fallacy where language is used imprecisely.",
    options: ["Fallacies of Ambiguity", "Fallacies of Composition", "Fallacies of Ambiguity Hyprocrisy", "Fallacies of Relevance"],
    answer: "Fallacies of Ambiguity"
  },
  {
    question: "2.	It is a type of Fallacy where it attempts to persuade using emotions.",
    options: ["Appeal to force", "Appeal to Ignorance", "Appeal to Hyprocrisy", "Appeal to Pity"],
    answer: "Appeal to Pity"
    
  },
  {
    question: "3.	It is the phrase is used which can be understood more than one way.",
    options: ["Complex Question Fallacy", "Syntactic Ambiguity", "Fallacy of composition", "Equivocation Fallacy"],
    answer: "Complex Question Fallacy"
    
  },
  {
    question: "4. The term is used in two or more different senses within a single argument.",
    options: ["Equivocation Fallacy", "Syntactic Ambiguity", "Fallacy of Composition", "Complex Question Fallacy"],
    answer: "Equivocation Fallacy"
    
  },
  {
    question: "5.	It is psychologically or emotionally relevant.",
    options: ["Fallacies of Ambiguity", "Fallacies or Relevance", "Fallacies of Insufficient Evidence", "Fallacies of False Cause"],
    answer: "Fallacies of Ambiguity"
    
  },
  {
    question: "6.	From the fact that a person judged to be an authority affirms a proposition to the claim that the proposition is true.",
    options: ["Appeal to force", "Appeal to Authority", "Appeal to Popularity", "Appeal to Politics"],
    answer: "Appeal to Authority"
    
  },
  {
    question: "7.	Proposes that we accept the truth of a proposition unless an opponent prove otherwise.",
    options: ["Appeal to Authority", "Appeal to Popularity", "Appeal to Ignorance", "Appeal to Hyprocrisy"],
    answer: "Appeal to Ignorance"
    
  },
  {
    question: "8.	Based on too little info or generalizing from few particular that are probably not representative of an entire group.",
    options: ["Fallacies of Insufficient Evidence", "Fallacy of Composition", "Hasty Generalization", "Appeal to Ignorance"],
    answer: "Hasty Generalization"
    
  },
  {
    question: "9.	Assumes that an event must have been the cause of a later event because it happened earlier.",
    options: ["Appeal to Ignorance", "False Cause", "Hasty Generalization", "Fallacy of Composition"],
    answer: "False Cause"
    
  },
  {
    question: "10.	The premises fail to provide evidence strong enough to support the conclusion.",
    options: ["Fallacies of Ambiguity", "Fallacy of Relevance", "Fallacies of Insufficient Evidence", "Fallacy of False Cause"],
    answer: "Fallacies of Insufficient Evidence"
    
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
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="main.html">Back</a><details><h3>Answers</h3><li>1.Fallacies of Ambiguity</li><li>2.Appeal to Pity</li><li>3.Complex Question Fallacy</li><li>4.Equivocation Fallacy</li><li>5.Fallacies of Ambiguity</li><li>6.Appeal to Authority</li><li>7.Appeal to Ignorance</li><li>8.Hasty Generalization</li><li>9.False Cause</li><li>10.Fallacy of Insufficient Evidence</li></details>`;
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

