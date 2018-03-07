
gifty = {
			configurable: true,
			initiateArray: true,
			apiKey: "Vs2Ptjtt59FKmnxVaKDxpDUwUAJ8qogj",
			q: "",

	 } //End of Gifty Object

$("form").submit(function(event){
	event.preventDefault();

}); //end form listener



$(".predefined").on("click", "button", function() {
	event.preventDefault(); // prevent form from posting


	var check = $(this).attr("name");
	var addVillain;


	//verify if this is a button press or a new search add
	if(check == "newVillain")
	{
		 addVillain = $( "#searchThis" ).val();
		$('.predefined').prepend($('<button>', { name: addVillain, class: "btn btn-default"}));

		//var make = '[name=' + addVillain + ']';

		$('[name=' + addVillain + ']').text(addVillain);
	}
	else
	{
	    addVillain = check;
	}

	//If there were gifs before.. remove them!
	$( ".row" ).empty();
	$("#searchThis").val(""); //reset value to blank for the input field

	gifty.q = addVillain;

	$.ajax({
		url: "http://api.giphy.com/v1/gifs/search?q=" + gifty.q + "&api_key=" + gifty.apiKey + "&limit=20",
		type: "GET",
		success: function(data){
			//If an array of items was not pulled from the call
			if(data.data.length < 20){
				$('[name=' + addVillain + ']').remove();
				$(".status").text("We were not able to find: " + gifty.q);

			}
			//else perform the work! because it was pulled 
			else
			{
			$(".status").text("");
					
			//If the first time adding to an array first element
			if(gifty.initiateArray){
				Object.defineProperty(gifty, 'villains', { 
				//configurable: true,
				value: [{villain: addVillain, rating: data.data[0].rating, animate: data.data[0].images.fixed_width.url, still: data.data[0].images.fixed_width_still.url}] });
				
				//Save the new villain into gifty subsequent elements from the first call
				for(var i = 1; i < 20; i++){
					gifty.villains.push({ villain: addVillain, rating: data.data[i].rating, animate: data.data[i].images.fixed_width.url, still: data.data[i].images.fixed_width_still.url });
				} //end for

				//make the necessary divs to display the new gifs
				 $("#allImages").append($('<div>', {class: "row"}));

						for(var i = 0; i < gifty.villains.length; i++){
							$('.row').append($('<div>', {class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 float-left", id: "col" + [i]}));
							$('#col' + [i]).append($('<div>', {class: "contentHolder" + [i], id: "contentHolder"}));
							$(".contentHolder" + [i]).text(gifty.villains[i].rating);
							$('.contentHolder' + [i]).append($('<img>', {src: gifty.villains[i].animate, id: [i], "state": "animate", "data-animate": gifty.villains[i].animate, "data-still": gifty.villains[i].still }));
						}
					

				gifty.initiateArray = false;
			} //end of the if statement

			//not the first time no need to define properties
			else
			{
				for(var i = 0; i < 20; i++){
					gifty.villains.push({ villain: addVillain, rating: data.data[i].rating, animate: data.data[i].images.fixed_width.url, still: data.data[i].images.fixed_width_still.url });
				}

			 	//make the necessary divs to display the new gifs
				for(var i = gifty.villains.length - 20; i < gifty.villains.length; i++){
						//
						$('.row').append($('<div>', {class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 float-left", id: "col" + [i]}));
							$('#col' + [i]).append($('<div>', {class: "contentHolder" + [i]}));
							$(".contentHolder" + [i]).text(gifty.villains[i].rating);
							$('.contentHolder' + [i]).append($('<img>', {src: gifty.villains[i].animate, id: [i], "state": "animate", "data-animate": gifty.villains[i].animate, "data-still": gifty.villains[i].still }));
				} //for
			} //else
				
		} //first call else


		}, 
		error: function(data){
			$("#status").text("Something went wrong :'-(");
		}
	}); //close ajax
});

//if a picture is clicked.
$("#allImages").on("click", "img", function() {
	event.preventDefault(); // prevent form from posting
	var state = $(this).attr("state");
	//determine if the picture is animated or still
		if(state === "animate")
		{
			$(this).attr("state", "still");
			$(this).attr("src", $(this).attr("data-still") );
			// else the gif is still put it into motion!	
		} 
		else
		{
			$(this).attr("state", "animate");
			$(this).attr("src", $(this).attr("data-animate") );
		}
});







