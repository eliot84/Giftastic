//able to print out an image from the api v2

gifty = {
			villains: [{villain: "joker"}, {villain: "Captain Hook"}],
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

			   	console.log("success got data", data);
				
			   	//access image url
				console.log(data.data[0].images.fixed_height.url);

			   	//access rating
				var rating = data.data[0].rating;

				//access image url
				var url = data.data[0].images.fixed_height.url;
				gifty.villains.push({villain: addVillain, rating: rating, url: url }); //add the submitted variable to the villains array in gifty


				$("#image").attr("src", url);


			    });


	$("#searchThis").val(" "); //reset value to blank for the input field

	

  	//console.log(gifty);
  	//console.log(currQuery);
});

