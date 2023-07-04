let btnContainer = document.getElementById("points");
let btns = btnContainer.getElementsByClassName("btn-points");


for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      
    });
    
    
  }

  // JavaScript:
function handleClick(event) {
  var number = event.target.textContent;
  var messageElement = document.getElementById("message");
  
  switch (number) {
    case "1":
      messageElement.textContent = "Number one is clicked.";
      break;
    case "2":
      messageElement.textContent = "Number two is clicked.";
      break;
    case "3":
      messageElement.textContent = "Number three is clicked.";
      break;
    default:
      messageElement.textContent = "Unknown number is clicked.";
  }
}

// Get all number elements
var numberElements = document.querySelectorAll(".number");

// Attach event listeners using forEach loop
numberElements.forEach(function(element) {
  element.addEventListener("click", handleClick);
});





 

