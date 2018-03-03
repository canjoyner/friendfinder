$("#submitForm").on("click", function(){

		// Here we grab the form elements
		var newUser = {
			userName: $('#name').val().trim(),
			userUrl:  $('#photo').val().trim(),
			qestion1: $('#question1').val().trim(),
			qestion2: $('#question2').val().trim(),
			qestion3: $('#question3').val().trim(),
			qestion4: $('#question4').val().trim(),
			qestion5: $('#question5').val().trim(),
		};

		console.log(newUser);

				var currentURl = window.location.origin;

	    $.post(currentURL + "/api/tables", newUser,
	    function(data){

	    	// If a table is available... tell user they are booked.
	    	if(data == true){
	    		alert("Yay! You are officially booked!")
	    	}

	    	// If a table is available... tell user they on the waiting list.
	    	if(data == false){
	    		alert("Sorry you are on the wait list")
	    	}

	    	// Clear the form when submitting
    		$('#name').val("");
			$('#photo').val("");
			$('#question1').val("");
			$('#question2').val("");
			$('#question3').val("");
			$('#question4').val("");
			$('#question5').val("");
	    });

return false;

});

 