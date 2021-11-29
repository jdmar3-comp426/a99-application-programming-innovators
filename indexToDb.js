//CreateAccount Call. Given an HTML form object with id "Create Account", which has input objects with id's "user",
//"pass", and "email", and a button, the user will be created with the given
//information when the button is pressed.
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
    sendRequest.open( "POST", "http://localhost:5000/app/new/user" ); //end point is address
    //the request is sent with the data to the database
    sendRequest.send( signupInfo );
}
//accesses the Create Account element from the html.
const createForm = document.getElementById("Create Account");
//adds listener to the button in createForm
createForm.addEventListener("submit", function (event) {
    event.preventDefault();
    CreateAccount();
});
//---------------------------------------------------------------------------------------------------------------------------//
//DeleteAccount Call. Given an HTML form object with id="Delete Account", which has input object with
//id="id", and a button, the user with the id equal to the value of input="id" will be deleted.
function DeleteAccount() {  
    //creates a new XMLHttpRequest
    var sendRequest = new XMLHttpRequest();
    //parses the data into a readable format
    var signupInfo = new URLSearchParams(new FormData( deleteForm ));
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
deleteForm.addEventListener("submit", function (event) {
    event.preventDefault();
    DeleteAccount();
});
//---------------------------------------------------------------------------------------------------------------------------//
function UpdateAccount() {
    //creates a new XMLHttpRequest
    var sendRequest = new XMLHttpRequest();
    //parses the data into a readable format
    var signupInfo = new URLSearchParams(new FormData( updateForm ));
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
//---------------------------------------------------------------------------------------------------------------------------//
//GetData Call. Given an HTML input object with id="Get Example", and an object with id="Element to Change", the respective data
//will be parsed to the object with id="Element to Change"
function getData(){
    //creates a new XMLHttpRequest
    const xhr = new XMLHttpRequest();
    //I do not understand why onreadystatechange is necessary, but it is.
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
            document.getElementById("Element to Change").textContent = xhr.responseText;
    }
    //the GET request is opened to the respective endpoint
    xhr.open("GET", "http://localhost:5000/app/users");
    //the request is sent
    xhr.send();
    
}
//accesses the Get Example button from the html
const getBtn = document.getElementById("Get Example");
//adds listener to the button
getBtn.addEventListener("click", function (event) {
    console.log("button clicked!");
    event.preventDefault();
    getData();
});
//---------------------------------------------------------------------------------------------------------------------------//
function getTransactions(){
    //creates a new XMLHttpRequest
    const xhr = new XMLHttpRequest();
    //I do not understand why onreadystatechange is necessary, but it is.
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
            document.getElementById("Element to Change 2").textContent = xhr.responseText;
    }
    //the GET request is opened to the respective endpoint
    xhr.open("GET", "http://localhost:5000/app/transactions");
    //the request is sent
    xhr.send();
    
}
//accesses the Get Example button from the html
const getBtn2 = document.getElementById("Get Transactions");
//adds listener to the button
getBtn2.addEventListener("click", function (event) {
    console.log("button clicked!");
    event.preventDefault();
    getTransactions();
});
//---------------------------------------------------------------------------------------------------------------------------//
function getSomeTransacions(){
    const xhr = new XMLHttpRequest();
    const signupInfo = new URLSearchParams(new FormData( someTransactionForm ));
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200)
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
            document.getElementById("Element to Change 3").textContent = xhr.responseText;
    }
    xhr.open("GET", "http://localhost:5000/app/transactions/" + signupInfo.get("id"));
    xhr.send();
}
const someTransactionForm = document.getElementById("Get Some Transactions");
someTransactionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    getSomeTransacions();
});
//---------------------------------------------------------------------------------------------------------------------------//
function CreateTransaction() {
    //creates a new XMLHttpRequest
    var sendRequest = new XMLHttpRequest();
    //parses the data into a readable format
    var signupInfo = new URLSearchParams(new FormData( transactionForm ));
    //alerts sent as pop-ups if request makes it to server or not
    sendRequest.addEventListener( "load", function( event ) {
        alert( "Your account was successfully created!");
    });
        
     sendRequest.addEventListener( "error", function (event) {
        alert( "Submission unsuccessful, Please try again." );
    });

    //the POST request is opened to the respective endpoint 
    sendRequest.open( "POST", "http://localhost:5000/app/new/transaction" ); //end point is address
    //the request is sent with the data to the database
    sendRequest.send( signupInfo );
}
//accesses the Create Account element from the html.
const transactionForm = document.getElementById("Create Transaction");
//adds listener to the button in createForm
transactionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    CreateTransaction();
});
