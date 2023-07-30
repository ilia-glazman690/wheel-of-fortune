// JavaScript code for the quiz app

// Quiz questions data (replace with your own questions)
const quizQuestions = [
    {
      question: "Question 1",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      correctAnswer: "Choice 1"
    },
    // Add more questions here...
  ];
  
  // Other global variables
  let currentQuestionIndex = 0;
  let timerInterval;
  let timeRemaining = 60;
  let score = 0;
  
  // DOM elements
  const startScreen = document.getElementById("start-screen");
  const quizContainer = document.getElementById("quiz-container");
  const endScreen = document.getElementById("end-screen");
  const highScoreScreen = document.getElementById("high-score");
  const startButton = document.getElementById("start-btn");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const timeElement = document.getElementById("time");
  const initialsInput = document.getElementById("initials");
  const submitButton = document.getElementById("submit-btn");
  const highScoreList = document.getElementById("high-score-list");
  const goBackButton = document.getElementById("go-back-btn");
  const clearScoresButton = document.getElementById("clear-btn");
  
  // Function to start the quiz
  function startQuiz() {
    startScreen.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    timeRemaining = 60;
    score = 0;
    currentQuestionIndex = 0;
    showQuestion();
    startTimer();
  }
  
  // Function to display the next question
  function showQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
      endQuiz();
      return;
    }
    const question = quizQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
  
    for (const choice of question.choices) {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", handleChoiceClick);
      choicesElement.appendChild(button);
    }
  }
  
  // Function to handle user's answer choice
  function handleChoiceClick(event) {
    const selectedChoice = event.target.textContent;
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
  
    if (selectedChoice === correctAnswer) {
      score++;
    } else {
      timeRemaining -= 10; // Deduct 10 seconds for wrong answer
      if (timeRemaining < 0) {
        timeRemaining = 0;
      }
    }
  
    currentQuestionIndex++;
    showQuestion();
  }
  
  // Function to end the quiz
  function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.classList.add("hidden");
    endScreen.classList.remove("hidden");
    document.getElementById("final-score").textContent = score;
  }
  
  // Function to start the timer
  function startTimer() {
    timeElement.textContent = timeRemaining;
    timerInterval = setInterval(function () {
      timeRemaining--;
      timeElement.textContent = timeRemaining;
      if (timeRemaining <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to handle the submission of high score
  function handleHighScoreSubmit(event) {
    event.preventDefault();
    const initials = initialsInput.value.trim().toUpperCase();
    if (initials !== "") {
      // Save the score and initials to local storage (you need to implement this)
      // Show the high score screen (you need to implement this)
    }
  }
  
  // Function to display high scores
  function showHighScores() {
    // Get high scores from local storage (you need to implement this)
    // Display the high scores on the high score screen (you need to implement this)
  }
  
  // Function to clear high scores
  function clearHighScores() {
    // Clear high scores from local storage (you need to implement this)
    // Refresh the high score list (you need to implement this)
  }
  
  // Event listeners
  startButton.addEventListener("click", startQuiz);
  submitButton.addEventListener("click", handleHighScoreSubmit);
  goBackButton.addEventListener("click", function () {
    endScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  });
  clearScoresButton.addEventListener("click", clearHighScores);
  