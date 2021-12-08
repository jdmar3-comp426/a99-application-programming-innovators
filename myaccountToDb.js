function UpdateAccount() {
    //creates a new XMLHttpRequest
    var sendRequest = new XMLHttpRequest();
    //parses the data into a readable format
    var signupInfo = new URLSearchParams(new FormData( updateForm ));
    
    var id = window.localStorage.getItem("id");
    id.replace(/[^0-9]/g, '');
    signupInfo.set("id", id);
    window.localStorage.setItem("user", signupInfo.get("user"));
    window.localStorage.setItem("email", signupInfo.get("email"));
    //alerts sent as pop-ups if request makes it to server or not
    sendRequest.addEventListener( "load", function( event ) {
        alert( "Your account was successfully updated!");
    });
        
     sendRequest.addEventListener( "error", function (event) {
        alert( "Submission unsuccessful, Please try again." );
    });

    //the PATCH request is opened to the respective endpoint 
    sendRequest.open( "PATCH", "http://localhost:5000/app/update/user/"+ signupInfo.get('id')); //end point is address
    //the request is sent with the data to the database
    sendRequest.send( signupInfo );
}
//accesses the Update Account element from the html.
const updateForm = document.getElementById("Update Account");

//adds listener to the button in updateForm
updateForm.addEventListener("submit", function (event) {
    event.preventDefault();
    UpdateAccount();
});

function DeleteAccount() {  
    //creates a new XMLHttpRequest
    var sendRequest = new XMLHttpRequest();
    //parses the data into a readable format
    var signupInfo = new URLSearchParams(new FormData( deleteForm ));

    var id = window.localStorage.getItem("id");
    id.replace(/[^0-9]/g, '');
    signupInfo.set("id", id);
    //alerts sent as pop-ups if request makes it to server or not
    sendRequest.addEventListener( "load", function( event ) {
        alert( "Your account was successfully deleted!");

    });
        
     sendRequest.addEventListener( "error", function (event) {
        alert( "Submission unsuccessful, Please try again." );
    });

    //the DELETE request is opened to the respective endpoint
    sendRequest.open( "DELETE", "http://localhost:5000/app/delete/user/" + signupInfo.get('id')); //end point is address
    //the request is sent
    sendRequest.send();
}
//accesses the Delete Account element from the html
const deleteForm = document.getElementById("Delete Account");
//adds listener to button in deleteForm
deleteForm.addEventListener("click", function (event) {
    event.preventDefault();
    DeleteAccount();
    window.localStorage.setItem("id", null);
});

function runChanges() {
    const text = document.getElementById("username");
    text.textContent = window.localStorage.getItem("user") + "'s Account"
    const user = document.getElementById("user");
    user.value = window.localStorage.getItem("user");
    const email = document.getElementById("email");
    email.value = window.localStorage.getItem("email");
}
document.body.onload = runChanges();