$(document).ready(function() {

	$("#hero-email").focus();

	$("#registration-form").submit(function(e) {
		e.preventDefault();
		var email = $("input[name='email']").val();
		var registrationFormURL = "https://docs.google.com/forms/d/14ivINPXtLc1II63VhjRUACnzxwNu41LmKhYCE94yBJ4/viewform?entry.444215346&entry.1007700452&entry.1440565968="
								  + email
								  + "&entry.900727438&entry.1318826458";
		window.location.href = registrationFormURL;
	});

});