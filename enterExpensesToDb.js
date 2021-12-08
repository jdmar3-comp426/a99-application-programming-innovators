function CreateTransaction() {
    //creates a new XMLHttpRequest
    var sendRequest = new XMLHttpRequest();
    //parses the data into a readable format
    var signupInfo = new URLSearchParams(new FormData( transactionForm ));
    var id = window.localStorage.getItem("id");
    id.replace(/[^0-9]/g, '');
    signupInfo.set("id", id);
    //alerts sent as pop-ups if request makes it to server or not
    sendRequest.addEventListener( "load", function( event ) {
        alert( "Your transaction was successfully entered!");
    });
        
     sendRequest.addEventListener( "error", function (event) {
        alert( "Submission unsuccessful, Please try again." );
    });

    //the POST request is opened to the respective endpoint 
    sendRequest.open( "POST", "http://localhost:5000/app/new/transaction" ); //end point is address
    //the request is sent with the data to the database
    sendRequest.send( signupInfo );
}
//accesses the Create Transaction element from the html.
const transactionForm = document.getElementById("Create Transaction");
//adds listener to the button in createForm
transactionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    CreateTransaction();
});