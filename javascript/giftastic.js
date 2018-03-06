// loading 5 images and stopping animating the gifs also works. still need to program buttons.

gifty = {
			configurable: true,
			initiateArray: true,
			apiKey: "Vs2Ptjtt59FKmnxVaKDxpDUwUAJ8qogj",
			q: ""

	 }




$( "#submitSearch" ).click(function() {
	event.preventDefault(); // prevent form from posting
	var addVillain = $( "#searchThis" ).val();
	gifty.q = addVillain;

  	

  	//var currQuery = gifty.villains[gifty.villains.length - 1].villain; //assign the 

	 var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + gifty.q + "&api_key=" + gifty.apiKey + "&limit=5");
			   xhr.done(function(data) { 

			  	//console.log("success got data", data);
				
			   	//access image url
			//	console.log(data.data[0].images.fixed_height.url);

			   	//access rating
			//	var rating = data.data[0].rating;

				//access image url
			//	var url = data.data[0].images.fixed_height.url;
				//gifty.villains.push({villain: addVillain, rating: rating, url: url }); //add the submitted variable to the villains array in gifty


//If the first time adding to an array first element
if(gifty.initiateArray){
	Object.defineProperty(gifty, 'villains', { 
	//configurable: true,
	value: [{villain: addVillain, rating: data.data[0].rating, animate: data.data[0].images.fixed_width.url, still: data.data[0].images.fixed_width_still.url}] });
	
	//Save the new villain into gifty subsequent elements from the first call
	for(var i = 1; i < 5; i++){
		gifty.villains.push({ villain: addVillain, rating: data.data[i].rating, animate: data.data[i].images.fixed_width.url, still: data.data[i].images.fixed_width_still.url });
	}

	//make the necessary divs to display the new gifs
	 $("#allImages").append($('<div>', {class: "row"}));
		$('.row').append($('<div>'));
			$('.row').prepend($('<div>', {class: "col-xs-12 col-sm-4 col-md-4 col-lg-4"}));

		for(var i = 0; i < gifty.villains.length; i++){
			$('.row').prepend($('<img>', {src: gifty.villains[i].animate, "state": "animate", "data-animate": gifty.villains[i].animate, "data-still": gifty.villains[i].still }));
					//$('.row').prepend($('<img>', {src: gifty.villains[i].animate, "state": "animate"}));

			console.log(gifty.villains[i].animate);
		}

	gifty.initiateArray = false;
}
//not the first time no need to define properties
else
{
	for(var i = 0; i < 5; i++){
		gifty.villains.push({ villain: addVillain, rating: data.data[i].rating, animate: data.data[i].images.fixed_width.url, still: data.data[i].images.fixed_width_still.url });
	}

	console.log(gifty);
	
 	//make the necessary divs to display the new gifs

		for(var i = gifty.villains.length - 5; i < gifty.villains.length; i++){
			$('.row').prepend($('<img>', {src: gifty.villains[i].animate, "state": "animate", "data-animate": gifty.villains[i].animate, "data-still": gifty.villains[i].still }));
			console.log(gifty.villains[i].animate);
		}


}

//if a picture is clicked.
$("img").on("click", function() {
console.log(gifty);
	//determine if the picture is animated or still
	var state = $(this).attr("state");

	// if the specified gif is in motion make it still 
	if(state === "animate"){
		$(this).attr("state", "still");
		$(this).attr("src", $(this).attr("data-still") );
	// else the gif is still put it into motion!	
	} else{
		$(this).attr("state", "animate");
		$(this).attr("src", $(this).attr("data-animate") );
	}
});


 




















					//	 $('#pic').attr("src", url); 
			/*
				for (var i = 0; i < 4; i++)
				{
					  var addImage = '<img id="image">';
					  $("#allImages").append( '<div class="row">' + '<div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 id="hello"">' + '</div>' + '</div>');

					  for(var x = 0; x < 4; x++){
					  	$("#hello").append('<img id="image' + x + '">' +'</div>');
					  	 $('"#image' + x + '"').attr("src", url);
					  }
				



					 
					  console.log("done");
				}
*/

				//$("#image").attr("src", url);


			    });


	$("#searchThis").val(" "); //reset value to blank for the input field

	

  	//console.log(gifty);
  	//console.log(currQuery);
});

