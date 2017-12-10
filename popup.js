document.addEventListener("DOMContentLoaded", function() {
  var signUp = document.getElementById("sign-up");
  var signIn = document.getElementById("sign-in");
  var startContainer = document.getElementById("start-container");
  var signInContainer = document.getElementById("sign-in-container");
  var signInForm = document.getElementById("sign-in-form");
  var signInSubmit = document.getElementById("sign-in-submit");

  signUp.addEventListener("click", function() {
    chrome.tabs.create({url: "https://link-savr.herokuapp.com"});
  });

  signIn.addEventListener("click", function() {
    startContainer.style.display = "none";
    signInContainer.style.display = "block";
  });

  signInSubmit.addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    $.ajax({
      dataType: "json",
      url: "http://localhost:3000/auth/login",
      method: "POST",
      data: {email: email, password: password}
    }).done(function(data) {
      console.log(data)
    });
  });

}, false);


// https://www.google.com/search?q=build+chrome+extension&oq=build+chrome+e&aqs=chrome.0.0l2j69i57j0l3.2776j0j7&sourceid=chrome&ie=UTF-8
