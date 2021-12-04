//TODO: need help setting up endpoint. Issue is we need to verify 3 fields, but can only send one to a get request

    //create a get request using signupinfo
    const xhr2 = new XMLHttpRequest();
    var signupInfo = new URLSearchParams(new FormData( createForm ));
    var id;

    //I do not understand why onreadystatechange is necessary, but it is.
    xhr2.onreadystatechange = function () {
        if(xhr2.readyState == 4 && xhr2.status == 200){
            //xhr.responseText is the data that we get from the server. We are then setting the textContent of object
            //id="Element to Change" to that.
            var x = xhr2.responseText.replace(/[^0-9]/g, '');
            window.localStorage.setItem("id", x);
        }
    }
    //the GET request is opened to the respective endpoint
    xhr2.open("GET", "http://localhost:5000/app/get/id/" + signupInfo.get('user') +signupInfo.get('email') + signupInfo.get('pass'));
    //the request is sent
    xhr2.send();