document.addEventListener("DOMContentLoaded", function () {
    // Fetch trivia questions from the API
    fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=boolean")
      .then(response => response.json())
      .then(data => {
        // Extract the first trivia question
        let triviaQuestion = data.results[0].question;
        
        // Display the trivia question on the webpage
        document.getElementById("gameTriviaDisplay").textContent = triviaQuestion;
        
        // Add event listeners to true and false buttons
        document.getElementById("trueButton").addEventListener("click", function () {
          // Check if the user's answer is correct
          let correctAnswer = data.results[0].correct_answer === "True";
          if (correctAnswer) {
            alert("Correct!");
          } else {
            alert("Incorrect!");
          }
        });
        
        document.getElementById("falseButton").addEventListener("click", function () {
          // Check if the user's answer is correct
          let correctAnswer = data.results[0].correct_answer === "False";
          if (correctAnswer) {
            alert("Correct!");
          } else {
            alert("Incorrect!");
          }
        });
      })
  });

  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean")
      .then(response => response.json())
      .then(data => {
    
        let triviaQuestion = data.results[0].question;
        
     
        document.getElementById("musicDisplay").textContent = triviaQuestion;

        document.getElementById("trueButton").addEventListener("click", function () {
          let correctAnswer = data.results[0].correct_answer === "True";
          if (correctAnswer) {
            alert("Correct!");
          } else {
            alert("Incorrect!");
          }
        });
        
        document.getElementById("falseButton").addEventListener("click", function () {
          let correctAnswer = data.results[0].correct_answer === "False";
          if (correctAnswer) {
            alert("Correct!");
          } else {
            alert("Incorrect!");
          }
        });
      })
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=boolean")
      .then(response => response.json())
      .then(data => {
        let triviaQuestion = data.results[0].question;

        document.getElementById("movieDisplay").textContent = triviaQuestion;
        
        document.getElementById("trueButton").addEventListener("click", function () {
   
          let correctAnswer = data.results[0].correct_answer === "True";
          if (correctAnswer) {
            alert("Correct!");
          } else {
            alert("Incorrect!");
          }
        });
        
        document.getElementById("falseButton").addEventListener("click", function () {
          let correctAnswer = data.results[0].correct_answer === "False";
          if (correctAnswer) {
            alert("Correct!");
          } else {
            alert("Incorrect!");
          }
        });
      })
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nQButton").addEventListener("click", function () {
      // Reload the current page
      location.reload();
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Get the audio element
    let bgMusic = document.getElementById("bgMusic");
  
    // Check if the audio playback status is stored in local storage
    let isMusicPlaying = localStorage.getItem("bgMusicPlaying");
  
    // If music was playing before, resume playback
    if (isMusicPlaying === "true") {
      bgMusic.play();
    }
  });

