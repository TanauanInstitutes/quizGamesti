const quizData = [
  {
    question: "1. Ito ang pinasimple at pinaikling bersyon ng sulatin o akda.",
    options: ["Abstrak", "Kongklusyon", "Buod", "Lagom"],
    answer: "Lagom"
  },
  {
    question: "2.	Ito ay isang uri ng lagom na karaniwang ginagamit sa akademikong papel.",
    options: ["Bionote", "Abstrak", "Buod", "Akademikang Pagsulat"],
    answer: "Buod"
    
  },
  {
    question: "3.	Ito ay isang uri ng lagom na ginagamit sa tekstong naratibo tulad ng kwento, parabula , at iba pang panitikan.",
    options: ["Buod", "Kongklusyon", "Bionote", "Lagom"],
    answer: "Buod"
    
  },
  {
    question: "4. Ito ay isang uri ng lagom  sa pagsulat ng personal profile.",
    options: ["Bionote", "Lagom", "Abstrak", "Memorandum"],
    answer: "Bionote"
    
  },
  {
    question: "5.		Ang lahat ng sumusunod ay isang uri ng lagom maliban sa isa, ano ito?",
    options: ["Abstrak", "Sinopsis", "Bionote", "Adyenda"],
    answer: "Adyenda"
    
  },
  {
    question: "6.	Isa itong uri ng lagom na karaniwang ginagamit sa akademikong papel.",
    options: ["Abstrak", "Sinopsis", "Buod", "Bionote"],
    answer: "Abstrak"
    
  },
  {
    question: "7.	Ayon sa kaniya, ang abstrak ay maikli ngunit may mahalagang element tulad ng introduksyon, mga kaugnay na literature, metodohiya, resulta, at kongklusyon.",
    options: ["Cecilia Austera", "Carmelita Alejo", "Edwin Mabilin", "Philip Koopman"],
    answer: "Philip Koopman"
    
  },
  {
    question: "8.	Sikaping maisulat ito ng maikli. Kung gagamitin sa resume, dapat isulat sa 200 na salita. Kung networking site naman, isulat ito sa 5-6 na pangungusap.",
    options: ["Abstrak", "Sinopsis", "Buod", "Bionote"],
    answer: "Bionote"
    
  },
  {
    question: "9.	Kadalasang bahagi ng tesis o disetasyon na nasa unahan ng pananaliksik.",
    options: ["Abstrak", "Sinopsis", "Buod", "Bionote"],
    answer: "Abstrak"
    
  },
  {
    question: "10.	Kailan isinulat ni Philip Koopman ang Kow to Write An Abstract?",
    options: ["1979", "1997", "1969", "1996"],
    answer: "1997"
    
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
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="main.html">Back</a><details><h3>Answers</h3><li>1.Lagom</li><li>2.Buod</li><li>3.Buod</li><li>4.Bionote</li><li>5.Adyenda</li><li>6.Abstrak</li><li>7.Philip Koopman</li><li>8.Bionote</li><li>9.Abstrak</li><li>10.1997</li></details>`;
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

function linkz() {
  window.location.href = "filak2.html";
}