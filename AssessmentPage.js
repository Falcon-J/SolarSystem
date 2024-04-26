// Define the questions array
const questions = [
  {
    question: "What are the two main types of eclipses?",
    options: [
      "Solar and Lunar",
      "Total and Partial",
      "Penumbral and Partial",
      "None of the above",
    ],
    correct: "Solar and Lunar",
  },
  {
    question: "What happens during a solar eclipse?",
    options: [
      "The Earth passes between the Sun and the Moon",
      "The Moon passes between the Earth and the Sun",
      "The Sun passes between the Earth and the Moon",
      "None of the above",
    ],
    correct: "The Moon passes between the Earth and the Sun",
  },
  {
    question: "What happens during a lunar eclipse?",
    options: [
      "The Sun passes between the Earth and the Moon",
      "The Moon passes between the Earth and the Sun",
      "The Earth passes between the Sun and the Moon",
      "None of the above",
    ],
    correct: "The Earth passes between the Sun and the Moon",
  },
  {
    question: "What is the closest star system to the Solar System?",
    options: ["Sirius", "Vega", "Proxima Centauri", "Alpha Centauri"],
    correct: "Alpha Centauri",
  },
  {
    question: "What is the brightest star in the night sky?",
    options: ["Betelgeuse", "Sirius", "Vega", "Alpha Centauri"],
    correct: "Sirius",
  },
  {
    question:
      "Which star is known as a red supergiant and one of the largest known stars?",
    options: ["Vega", "Proxima Centauri", "Betelgeuse", "Sirius"],
    correct: "Betelgeuse",
  },
  {
    question: "Approximately how many Earths could fit inside the Sun?",
    options: ["100,000", "1.3 million", "500,000", "3 million"],
    correct: "1.3 million",
  },
  {
    question: "What is estimated to be the age of the Milky Way galaxy?",
    options: [
      "10 billion years",
      "15 billion years",
      "20 billion years",
      "13.6 billion years",
    ],
    correct: "13.6 billion years",
  },
  {
    question: "What is the coldest planet in our Solar System?",
    options: ["Uranus", "Neptune", "Pluto", "Mars"],
    correct: "Uranus",
  },
  {
    question: "What is the coldest place in the universe?",
    options: [
      "The Boomerang Nebula",
      "The Andromeda Galaxy",
      "The Orion Nebula",
      "The Milky Way",
    ],
    correct: "The Boomerang Nebula",
  },
];

// Initial state
let currentQuestionIndex = 0;
let score = 0;
let attempts = [];
let selectedAnswer = null; // Track the selected answer

// Get references to HTML elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const reattemptBtn = document.getElementById("reattempt-btn");;
const quizContainer = document.getElementById("quiz-container");
const scoreContainer = document.getElementById("score-container");
const promptMessageEl = document.getElementById("prompt-message");

// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  attempts = [];
  selectedAnswer = null;
  nextBtn.style.display = "none"; // Hide the "Next" button initially
  promptMessageEl.style.display = "block"; // Show the prompt message initially
  showQuestion();
}

// Function to show the current question
function showQuestion() {
  // Clear previous options
  optionsEl.innerHTML = "";
  selectedAnswer = null; // Reset the selected answer

  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  // Display options in a 2 by 2 grid
  currentQuestion.options.forEach((option) => {
    const optionBtn = document.createElement("button");
    optionBtn.className = "option btn";
    optionBtn.textContent = option;

    // Event listener to handle option selection
    optionBtn.addEventListener("click", () => {
      // Clear previous selections
      clearOptionSelection();

      // Set the selected answer
      selectedAnswer = option;

      // Change the color of the selected option
      optionBtn.style.backgroundColor = "#00b312";

      // Hide the prompt message and show the "Next" button
      promptMessageEl.style.display = "none";
      nextBtn.style.display = "block";
    });

    optionsEl.appendChild(optionBtn);
  });

  // Show the "Next" button only if an option is selected
  nextBtn.style.display = selectedAnswer ? "block" : "none";
}

// Function to clear previous option selections
function clearOptionSelection() {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.style.backgroundColor = ""; // Reset the background color
  });
}

// Function to handle going to the next question
function goToNextQuestion() {
  if (selectedAnswer !== null) {
    // Check if the selected answer is correct
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
      score++;
    }

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      // Quiz is complete
      showScore();
    }
  } else {
    // Show the prompt message and hide the "Next" button
    promptMessageEl.style.display = "block";
    nextBtn.style.display = "none";
  }
}

// Function to show the user's score
function showScore() {
  quizContainer.style.display = "none";
  scoreContainer.style.display = "block";
  scoreEl.textContent = score;
}

// Event listener for reattempt button
reattemptBtn.addEventListener("click", () => {
  scoreContainer.style.display = "none";
  quizContainer.style.display = "block";
  startQuiz();
});


// Event listener for the "Next" button
nextBtn.addEventListener("click", goToNextQuestion);

// Start the quiz when the page loads
startQuiz();
