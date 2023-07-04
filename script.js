let btnContainer = document.getElementById("points");
let btns = btnContainer.getElementsByClassName("btn-points");
const sendRatingButton = document.querySelector("#send-rating-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  }); 
}

sendRatingButton.addEventListener("click", (event) => {
  // get the rating value
  const currentRating = document.querySelector(".btn-points.active a").dataset.rating;
  // send it as a query string parameter
  window.location.assign(`thankYou.html?rating=${currentRating}`);
});
