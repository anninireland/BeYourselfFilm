

// This function checks that submitted login credentials are not blank
function loginValidate() {
	var errormessage = 0
	var x = (document.getElementById("username").value);
	var y = (document.getElementById("password").value);

	if (x =="") {
		document.getElementById("username").style.borderColor = "red";
		document.getElementById("uerror").innerHTML = "enter your username";
		errormessage += 1;
	}
	if (y =="") {
		document.getElementById("password").style.borderColor = "red";
		document.getElementById("perror").innerHTML = "enter your password";
		errormessage += 1;
	}
	if (errormessage != 0) {
		return false;
	}
	else {
		window.location.href ="watch.html";
	}
};


// This function checks the contact form to ensure a blank comment is not submitted 
function contactValidate() {
	var errormessage = 0
	var x = (document.getElementById("comment").value);

	if (x =="") {
		document.getElementById("comment").style.borderColor = "red";
		document.getElementById("cerror").innerHTML = "Nothing to say? Just click cancel";
		return false;
	}
};

// sets up a hover state change for the headshots on c&
// modified from here: http://www.w3schools.com/jquery/event_hover.asp 
$(document).ready(function(){
    $(".headshot").hover(function(){
        $(this).css("background-color", "rgba(14,114,115, 0.4)");
        },function(){
        $(this).css("background-color", "#ffffff");
    });
});

