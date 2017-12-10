document.addEventListener("DOMContentLoaded", function() {
  var signUp = document.getElementById("sign-up");
  var signIn = document.getElementById("sign-in");
  var startContainer = document.getElementById("start-container");
  var signInContainer = document.getElementById("sign-in-container");
  var signInSubmit = document.getElementById("sign-in-submit");
  var signInForm = document.getElementById("sign-in-form");

  signUp.addEventListener("click", function() {
    chrome.tabs.create({url: "https://link-savr.herokuapp.com"});
  });

  signIn.addEventListener("click", function() {
    startContainer.style.display = "none";
    signInContainer.style.display = "block";
  });

  /// This is is not being processed as a json request by the rails app
  /// Change route, eventually
  signInForm.addEventListener("submit", function() {
    var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/auth/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var userInfo = JSON.parse(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify({
        email: email,
        password: password
    }));
  });
}, false);
