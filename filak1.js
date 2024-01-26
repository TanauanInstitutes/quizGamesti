const quizData = [
  {
    question: "1.	Isa sa mga sumusunod na salita ay hindi kabilang sa limang makrong kasanayan, ano ito?",
    options: ["Pakikinig", "Pagsasalita", "Panonood", "Pagmamasid"],
    answer: "Pagmamasid"
  },
  {
    question: "2.	Ayon kay ______ , ang pagsusulat ay isang pagpapahayag ng kaalamang kailanman ay hindi maglalaho.",
    options: ["Cecilia Austera", "Carmelita Alejo", "Edwin Mabilin", "Philip Koopman"],
    answer: "Edwin Mabilin"
    
  },
  {
    question: "3.	Isa itong uri ng Pagsulat na nagpapakilala sa mga pinagkunang kaalaman sa paggawa ng konsepto ng papel.",
    options: ["Reperensiyal na Pagsulat", "Teknikal na Pagpsulat", "Dyornalistik na Pagsulat", "Propesyunal na Pagsulat"],
    answer: "Reperensiyal na Pagsulat"
    
  },
  {
    question: "4. Ayon  sa kaniya, ang pagsulat ay isang kasanayang naglulundo ng kaisipian at damdaming nais gamit ang wika.",
    options: ["Cecilia Austera", "Carmelita Alejo", "Edwin Mabilin", "Philip Koopman"],
    answer: "Cecilia Austera"
    
  },
  {
    question: "5.	Ayon kay ____, ang pagsulat ay isang transpormatibong komunikasyon sa Akademikong Filipino.",
    options: ["Cecilia Austera", "Carmelita Alejo", "Edwin Mabilin", "Philip Koopman"],
    answer: "Edwin Mabilin"
    
  },
  {
    question: "6.	Isa itong layunin kung bakit nagsusulat, kung saan kailangan makipag-ugnayan sa ibang tao o sa lipunang ginagalawan.",
    options: ["Personal", "Naratibo", "Sosyal", "Argumentatibo"],
    answer: "Sosyal"
    
  },
  {
    question: "7.	Isa itong pamamaraan ng pagsulat kung saan ang layunin nito ay manghikayat sa mga mambabasa.",
    options: ["Impormatibo", "Ekspresibo", "Naratibo", "Argumentatibo"],
    answer: "Argumentatibo"
    
  },
  {
    question: "8.	Isa ito sa mga kagamitan ng pagsulat kung saan naka saalang-alang ang pagkakaroon ng wastong kaalaman sa wika.",
    options: ["Wika", "Kaalaman sa Wastong Pamamaraan ng Pagsulat", "Paksa", "Layunin"],
    answer: "Kaalaman sa Wastong Pamamaraan ng Pagsulat"
    
  },
  {
    question: "9.	Isa itong uri ng kagamitan ng pagsulat kung saan may kakayahang mailatag ang mga kaisipan o impormasyon.",
    options: ["Paksa", "Layunin", "Kaalaman sa Wastong Pamamaraan ng Pagsulat", "Impormatibo"],
    answer: "Kaalaman sa Wastong Pamamaraan ng Pagsulat"
    
  },
  {
    question: "10.	Isa itong layunin ng pagsulat kung saan nakabatay ito sa sariling pananaw, iniisip o nadarama ng manunulat.",
    options: ["Ekspresibo", "Sosyal", "Naratibo", "Argumentatibo"],
    answer: "Ekspresibo"
    
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
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/10</h2><p class="ty">Keep Up the Good Work and Always do your Best!</p> <a class="back" href="main.html">Back</a><details><h3>Answers</h3><li>1.Pagmamasid</li><li>2.Edwin Mabilin</li><li>3.Reperensiyal na Pagsulat</li><li>4.Cecilia Austera</li><li>5.Edwin Mabilin</li><li>6.Sosyal</li><li>7.Argumentatibo</li><li>8.Kaalaman sa Wastong Pamamaraan ng Pagsulat</li><li>9.Kaalaman sa Wastong Pamamaraan ng Pagsulat</li><li>10.Ekspresibo</li></details>`;
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
