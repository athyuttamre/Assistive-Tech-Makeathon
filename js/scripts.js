$(document).ready(function() {

	$("#registration-form, #final-registration-form").submit(function(e) {
		e.preventDefault();
		var id = $(this).attr("id");
		var email = (id == "registration-form") ? $("#hero-email").val() : $("#final-hero-email").val();

		if (email == "") {
			$("#" + id).addClass("animated shake");
			setTimeout(function() {$("#" + id).removeClass("animated shake")}, 800);
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
        $('.fading-content').each(function(i){

        	var id = $(this).attr("id");
            
            var quarter_of_object = $(this).position().top + ($(this).outerHeight() / 4);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > quarter_of_object){
                
                $(this).animate({'opacity':'1'},300);

                setTimeout(function() {
                	if(id == "workshops-content") {
                		$("#workshops-row").addClass("animated fadeInDown");
                	}
                }, 500);
                    
            }
            
        }); 
    
    });

});