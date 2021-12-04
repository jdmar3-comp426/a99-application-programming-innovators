//TODO: doesn't work because of html, don't know how to add an event listener to a list tag

const logOutBtn = document.getElementById("logout");

logOutBtn.addEventListener("submit", function(event) {
    window.localStorage.setItem("id", null)
});