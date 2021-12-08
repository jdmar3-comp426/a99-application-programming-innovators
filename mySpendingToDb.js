//TODO: Figure out why the categories are being recognized as columns

function totalSpending() {
    //create a get request using signupinfo
    const xhr2 = new XMLHttpRequest();
    //I do not understand why onreadystatechange is necessary, but it is.
    xhr2.onreadystatechange = function () {
        if(xhr2.readyState == 4 && xhr2.status == 200){
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
//            localStorage.setItem("id", xhr2.responseText);
            const x = "$" + xhr2.responseText.slice(15).substring(0, xhr2.responseText.slice(15).length-1);
            if(x != "$null")
            {
                document.getElementById("total spending").textContent = x;
            }
        }
    }
    //the GET request is opened to the respective endpoint
    xhr2.open("GET", "http://localhost:5000/app/get/totalSpend/" + window.localStorage.getItem("id"));
    //the request is sent
    xhr2.send();
}

function food() {
    //create a get request using signupinfo
    const xhr2 = new XMLHttpRequest();
    //I do not understand why onreadystatechange is necessary, but it is.
    xhr2.onreadystatechange = function () {
        if(xhr2.readyState == 4 && xhr2.status == 200){
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
//            localStorage.setItem("id", xhr2.responseText);
            const x = "$" + xhr2.responseText.slice(15).substring(0, xhr2.responseText.slice(15).length-1);
            if(x != "$null")
            {
                document.getElementById("food").textContent = x;
            }  
        }
    }
    //the GET request is opened to the respective endpoint
    xhr2.open("GET", "http://localhost:5000/app/get/food/" + window.localStorage.getItem("id"));
    //the request is sent
    xhr2.send();
}

function entertainment() {
    //create a get request using signupinfo
    const xhr2 = new XMLHttpRequest();
    //I do not understand why onreadystatechange is necessary, but it is.
    xhr2.onreadystatechange = function () {
        if(xhr2.readyState == 4 && xhr2.status == 200){
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
//            localStorage.setItem("id", xhr2.responseText);
            const x = "$" + xhr2.responseText.slice(15).substring(0, xhr2.responseText.slice(15).length-1);
            if(x != "$null")
            {
                document.getElementById("entertainment").textContent = x;
            }  
        }
    }
    //the GET request is opened to the respective endpoint
    xhr2.open("GET", "http://localhost:5000/app/get/entertainment/" + window.localStorage.getItem("id"));
    //the request is sent
    xhr2.send();
}

function shopping() {
    //create a get request using signupinfo
    const xhr2 = new XMLHttpRequest();
    //I do not understand why onreadystatechange is necessary, but it is.
    xhr2.onreadystatechange = function () {
        if(xhr2.readyState == 4 && xhr2.status == 200){
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
//            localStorage.setItem("id", xhr2.responseText);
            const x = "$" + xhr2.responseText.slice(15).substring(0, xhr2.responseText.slice(15).length-1);
            if(x != "$null")
            {
                document.getElementById("shopping").textContent = x;
            }
        }
    }
    //the GET request is opened to the respective endpoint
    xhr2.open("GET", "http://localhost:5000/app/get/shopping/" + window.localStorage.getItem("id"));
    //the request is sent
    xhr2.send();
}

function health() {
    //create a get request using signupinfo
    const xhr2 = new XMLHttpRequest();
    //I do not understand why onreadystatechange is necessary, but it is.
    xhr2.onreadystatechange = function () {
        if(xhr2.readyState == 4 && xhr2.status == 200){
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
//            localStorage.setItem("id", xhr2.responseText);
            const x = "$" + xhr2.responseText.slice(15).substring(0, xhr2.responseText.slice(15).length-1);
            if(x != "$null")
            {
                document.getElementById("health").textContent = x;
            }  
        }
    }
    //the GET request is opened to the respective endpoint
    xhr2.open("GET", "http://localhost:5000/app/get/health/" + window.localStorage.getItem("id"));
    //the request is sent
    xhr2.send();
}

function housing() {
    //create a get request using signupinfo
    const xhr2 = new XMLHttpRequest();
    //I do not understand why onreadystatechange is necessary, but it is.
    xhr2.onreadystatechange = function () {
        if(xhr2.readyState == 4 && xhr2.status == 200){
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
//            localStorage.setItem("id", xhr2.responseText);
            const x = "$" + xhr2.responseText.slice(15).substring(0, xhr2.responseText.slice(15).length-1);
            if(x != "$null")
            {
                document.getElementById("housing").textContent = x;
            }  
        }
    }
    //the GET request is opened to the respective endpoint
    xhr2.open("GET", "http://localhost:5000/app/get/housing/" + window.localStorage.getItem("id"));
    //the request is sent
    xhr2.send();
}

function other() {
    //create a get request using signupinfo
    const xhr2 = new XMLHttpRequest();
    //I do not understand why onreadystatechange is necessary, but it is.
    xhr2.onreadystatechange = function () {
        if(xhr2.readyState == 4 && xhr2.status == 200){
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
//            localStorage.setItem("id", xhr2.responseText);
            const x = "$" + xhr2.responseText.slice(15).substring(0, xhr2.responseText.slice(15).length-1);
            if(x != "$null")
            {
                document.getElementById("other").textContent = x;
            }
        }
    }
    //the GET request is opened to the respective endpoint
    xhr2.open("GET", "http://localhost:5000/app/get/other/" + window.localStorage.getItem("id"));
    //the request is sent
    xhr2.send();
}

function runChanges() {
    other();
    housing();
    health();
    shopping();
    entertainment();
    totalSpending();
    food();
    
}

document.body.onload = runChanges();