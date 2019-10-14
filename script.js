
var questionsEl = document.querySelector("#questions");
var arrayQues = document.querySelector("#queAnswers");
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
    
    for (var i = 0; i < questions[qIndex].choices.length ; i++) {
        var button = document.createElement("button");
        button.textContent = questions[qIndex].choices[i];
        arrayQues.appendChild(button);
    
        // Set the button event listener
        button.addEventListener("click", function(event) {
          var userChoice = event.target.textContent;
          if (userChoice === questions[qIndex].answer) {
            alert("CORRECT!") 
            qIndex++;
          } else { 
            alert("FALSE!")
            secondsLeft = secondsLeft-15 ;
          }
         
          if (qIndex < 4) {
            qIndex++;
            
          } else {
            clearInterval(timerInterval);
            alert("Your score is: " + score)
          }
    
          arrayQues.innerHTML = "";
    
          return startQuiz();
        })
      }
    }
    startQuiz();