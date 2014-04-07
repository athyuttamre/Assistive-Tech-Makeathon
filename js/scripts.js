$(document).ready(function() {

	$("#registration-form").submit(function(e) {
		e.preventDefault();
		var email = $("#hero-email").val();

		if (email == "") {
			$("#registration-form").addClass("animated shake");
			setTimeout(function() {$('#registration-form').removeClass("animated shake")}, 850);
			return;
		} else {
			var registrationFormURL = "https://docs.google.com/forms/d/14ivINPXtLc1II63VhjRUACnzxwNu41LmKhYCE94yBJ4/viewform?entry.444215346&entry.1007700452&entry.1440565968="
								  + email
								  + "&entry.900727438&entry.1318826458";
			window.location.href = registrationFormURL;
		}
	});

	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var third_of_object = $(this).position().top + ($(this).outerHeight() / 3);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > third_of_object){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });

});