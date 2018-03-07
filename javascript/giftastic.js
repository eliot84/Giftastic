
gifty = {
			configurable: true,
			initiateArray: true,
			apiKey: "Vs2Ptjtt59FKmnxVaKDxpDUwUAJ8qogj",
			q: "",
			stateChange: function(state){
				// if the specified gif is in motion make it still 
			
			}
	 } //End of Gifty Object

$("form").submit(function(event){
	event.preventDefault();

}); //end form listener

/*
type of event listener in quotes
filtered something in the parent
callback

*/

$(".predefined").on("click", "button", function() {
	event.preventDefault(); // prevent form from posting


	var check = $(this).attr("name");
	var addVillain;


	//verify if this is a button press or a new search add
	if(check != "newVillain")
	{
		 addVillain = check;
		console.log(check);

	}
	else
	{
		console.log("hello there in here1");
		 addVillain = $( "#searchThis" ).val();
		$('.predefined').append($('<button>', {id: "vbtn", value: addVillain, class: "btn btn-default"}));

		var make = '[value=' + addVillain + ']';

		$(make).text(addVillain);
		console.log(make);
	}

	//If there were gifs before.. remove them!
	$( ".row" ).empty();
	$("#searchThis").val(" "); //reset value to blank for the input field

	gifty.q = addVillain;

	 //Make the api call
	 var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + gifty.q + "&api_key=" + gifty.apiKey + "&limit=20");
	 
	 xhr.done(function(data) 
	 { 
		//console.log("success got data", data);
		
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
			$('.row').append($('<div>'));

				$('.row').prepend($('<div>', {class: "col-xs-12 col-sm-4 col-md-4 col-lg-4"}));

			for(var i = 0; i < gifty.villains.length; i++){
			$('<div>').prepend($("<p>").text(gifty.villains[i].rating));

			//	$('.row').prepend($('<img>', {src: gifty.villains[i].animate, id: [i], "state": "animate", "data-animate": gifty.villains[i].animate, "data-still": gifty.villains[i].still }));
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
			$('.row').prepend($("<p>").text(gifty.villains[i].rating));
			//$('.row').prepend($('<img>', {src: gifty.villains[i].animate, "state": "animate", "data-animate": gifty.villains[i].animate, "data-still": gifty.villains[i].still }));
		}
	}
}); //PREDEFINED





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




	

  	//console.log(gifty);
  	//console.log(currQuery);


