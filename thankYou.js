const ratingSpan = document.querySelector("#rating");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
ratingSpan.innerHTML = urlParams.get("rating");