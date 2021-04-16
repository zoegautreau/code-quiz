var doneButton = document.getElementById("done-button")
var initialsInput = document.querySelector("#userInitials");
var scoreInput = document.querySelector("#finalScore");
var saveButton = document.getElementById("save-button")
var msgDiv = document.querySelector("#msg");
var userInitialsSpan = document.querySelector("#user-initials");
var userScoreSpan = document.querySelector("#user-score");

renderLastUserScore();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

function renderLastUserScore() {
    var userInitials = localStorage.getItem("userInitials");
    var timeLeft = localStorage.getItem("timeLeft");
  
    if (!userInitials || !timeLeft) {
      return;
    }
  
    userInitialsSpan.textContent = userInitials;
    userScoreSpan.textContent = timeLeft;
  }

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    
  
    var userInitials = document.querySelector("#userInitials").value;
    var timeLeft = document.querySelector("#timeLeft").value;
  
    if (userInitials === "") {
      displayMessage("error", "Initials cannot be blank");
    } else if (timeLeft === "") {
      displayMessage("error", "Score cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
  
      localStorage.setItem("userInitials", userInitials);
      localStorage.setItem("timeLeft", timeLeft);
      renderLastUserScore();
    }
  });