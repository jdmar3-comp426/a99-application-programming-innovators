function login(){
    var xhr = new XMLHttpRequest();

    var loginInfo = new URLSearchParams(new FormData(loginForm));
    
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var x = xhr.responseText.replace(/[^0-9]/g, '');
            window.localStorage.setItem("id", x);
            if(x != "404" && x != null && x.length != 0)
            {
                window.localStorage.setItem("user", loginInfo.get("user"));
                window.localStorage.setItem("email", loginInfo.get("email"));
                alert( "Welcome Back, " + window.localStorage.getItem("user") + "!");
                window.open("http://localhost:3000/home.html", "_self");
            }
            else {
                alert("Not valid login info");
            }
       }
    }
    xhr.open("GET", "http://localhost:5000/app/get/id/" + loginInfo.get("user") + "/" + loginInfo.get("email") + "/" + loginInfo.get("pass"));
    xhr.send();

}
    const loginForm = document.getElementById("Login");

    loginForm.addEventListener("submit", function (event) {
       event.preventDefault();
        login();
    })