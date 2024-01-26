const quizData = [
  {
    question: "1. Ayon kay Sudprasert(2014), ito ay ang paksang tatalakayin sa pulong.",
    options: ["Memorandum", "Paksa", "Sitwasyon", "Adyenda"],
    answer: "Adyenda"
  },
  {
    question: "2.	Ayon kay Sudprasert(2014), ito ay isang kasulatang nagbibigay ng kabatiran tungkol sa gagawaing pulong o paalala tungkol sa isang mahalagang impormasyon, gawain, tungkulin, o utos.",
    options: ["Memorandum", "Paksa", "Sitwasyon", "Adyenda"],
    answer: "Memorandum"
    
  },
  {
    question: "3.	Ayon kay ____, may tatlong uri ng memorandum ayon sa layunin nito.",
    options: ["Bargo", "Sudprasert", "Koopman", "Austera"],
    answer: "Bargo"
    
  },
  {
    question: "4. Ang lahat ng sumusunod ay mahalgang elemento ng isang pulong, maliban sa isa. Ano ito?",
    options: ["Memorandum", "Adyenda", "Katitikan ng Pulong", "Sinopsis"],
    answer: "Sinopsis"
    
  },
  {
    question: "5.	Ayon kay _____, ang memorandum ay isang kasulatang nagbibigay ng kabatiran tungkol sa gagawaing pulong o paalala tungkol sa isang mahalagang impormasyon, gawain, tungkulin, o utos.",
    options: ["Bargo", "Sudprasert", "Koopman", "Austera"],
    answer: "Sudprasert"
    
  },
  {
    question: "6.	Ayon kay _____, ang mga kilala at malalaking kompanya at mga institusyon ay kalimitang gumagamit ng gma colored stationery para sa kanilang memo.",
    options: ["Bargo", "Sudprasert", "Koopman", "Austera"],
    answer: "Bargo"
    
  },
  {
    question: "7.	Ang lahat ng sumusunod ay ang tatlong uri ng memorandum ayon kay Bargo(2014), maliban sa isa, ano ito?",
    options: ["Memorandum para sa Kahiligan", "Memorandum para sa Kabatiran", "Memorandum para sa Pagtugon", "Memorandum para sa Badyet"],
    answer: "Memorandum para sa Badyet"
    
  },
  {
    question: "8.	Sino ang nagsulat ng aklat na “Writing in the Discipline”?",
    options: ["Bargo", "Sudprasert", "Koopman", "Austera"],
    answer: "Sudprasert"
    
  },
  {
    question: "9.	Kailan naisulat ni Dr. Darwin Bargo ang “Writing in the Discipline”?",
    options: ["1984", "1994", "2004", "2014"],
    answer: "2014"
    
  },
  {
    question: "10.	Ito ay isang talaan o tseklist upang matiyak na ang lahat ng paksang tatalakayin ay kasama sa talaan.",
    options: ["Memorandum", "Adyenda", "Sinopsis", "Katitikan ng Pulong"],
    answer: "Adyenda"
    
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
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="main.html">Back</a><details><h3>Answers</h3><li>1.Adyenda</li><li>2.Memorandum Mabilin</li><li>3.Bargi</li><li>4.Sinopsis</li><li>5.Sudprasert</li><li>6.Bargo</li><li>7.Memorandum para sa Badyet</li><li>8.Sudprasert</li><li>9.2014</li><li>10.Adyenda</li></details>`;
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

function links() {
  window.location.href = "filak.html";
}