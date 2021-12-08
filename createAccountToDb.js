function CreateAccount() {
    //creates a new XMLHttpRequest
    var sendRequest = new XMLHttpRequest();
    //parses the data into a readable format
    var signupInfo = new URLSearchParams(new FormData( createForm ));
    //alerts sent as pop-ups if request makes it to server or not
    sendRequest.addEventListener( "load", function( event ) {
        alert( "Your account was successfully created!");
    });
        
     sendRequest.addEventListener( "error", function (event) {
        alert( "Submission unsuccessful, Please try again." );
    });

    //the POST request is opened to the respective endpoint 
    sendRequest.open( "POST", "http://localhost:5000/app/new/user", true); //end point is address
    //the request is sent with the data to the database
    sendRequest.send( signupInfo );

    //create a get request using signupinfo
    const xhr2 = new XMLHttpRequest();

    //I do not understand why onreadystatechange is necessary, but it is.
    xhr2.onreadystatechange = function () {
        if(xhr2.readyState == 4 && xhr2.status == 200){
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            var x = xhr2.responseText.replace(/[^0-9]/g, '');
        }
    }
    //the GET request is opened to the respective endpoint
    xhr2.open("GET", "http://localhost:5000/app/get/id/" + signupInfo.get('email'));
    //the request is sent
    xhr2.send();

}
//accesses the Create Account element from the html.
const createForm = document.getElementById("Create Account");
//adds listener to the button in createForm
createForm.addEventListener("submit", function (event) {
    event.preventDefault();
    CreateAccount();
});

