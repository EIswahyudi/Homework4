
var questionsEl = document.querySelector("#questions");
var qIndex = 0;
var oIndex = 0;
var timeEl = document.querySelector(".time");
var correctAnwer = 0;
var wrongAnswer = 0;


var secondsLeft = 65;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time: "+ secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
    console.log("test");
  };
    setTime ();

 function startQuiz() {
    questionsEl.innerHTML = questions[qIndex].title;
    
     for (var i=0; i < questions[qIndex].choices.length;i++) {
        var button = document.createElement("button")
        button.textContent = questions[qIndex].choices[i];
        // var container = document.querySelector("#container");
        button.addEventListener("click", function(event) {
        var userGuess = event.target.textContent;
        if (userGuess === questions[qIndex].answer) {
        alert("Correct!");     
        }
        else {
            alert("False");
        }
        qIndex++;
        return startQuiz();
        });
       
        container.appendChild(button);
    }
 }
startQuiz()




// alert("Total correct " + correct + "\nTotal ties: " + ties + "\nTotal losses: " + losses);