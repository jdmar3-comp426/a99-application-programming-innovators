function login(){
    var xhr = new XMLHttpRequest();

    var loginInfo = new URLSearchParams(new FormData(loginForm));
    
    xhr.addEventListener( "load", function( event ) {
        alert( "Your account was successfully created!");
    });

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var x = xhr.responseText.replace(/[^0-9]/g, '');
            window.localStorage.setItem("id", x);
            alert( "Your account id is " + x);
       }
    }
    xhr.open("GET", "http://localhost:5000/app/get/id/" + loginInfo.get("user") + "/" + loginInfo.get("email"));
    xhr.send();

}
    const loginForm = document.getElementById("Login");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        login();
    })