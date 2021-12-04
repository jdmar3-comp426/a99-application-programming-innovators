//TODO: doesn't work because of html, don't know how to add an event listener to a list tag

const logOutBtn = document.getElementById("logout");

logOutBtn.onclick = function () {
    alert("You have logged out!");
    window.localStorage.setItem("id", null)
};