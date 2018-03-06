

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

			 //  	console.log("success got data", data);
				
			   	//access image url
			//	console.log(data.data[0].images.fixed_height.url);

			   	//access rating
			//	var rating = data.data[0].rating;

				//access image url
			//	var url = data.data[0].images.fixed_height.url;
				//gifty.villains.push({villain: addVillain, rating: rating, url: url }); //add the submitted variable to the villains array in gifty


//If the first time adding to an array
if(gifty.initiateArray){
	Object.defineProperty(gifty, 'villains', { 
	//configurable: true,
	value: [{villain: addVillain, rating: data.data[0].rating, animate: data.data[0].images.fixed_height.url}] });
	
	for(var i = 1; i < 4; i++){
		gifty.villains.push({ villain: addVillain, rating: data.data[i].rating, animate: data.data[i].images.fixed_height.url });
	}

	 $("#allImages").append($('<div>', {class: "row"}));
		$('.row').append($('<div>'));

		for(var i = 0; i < gifty.villains.length; i++){
			$('.row').prepend($('<img>', {src: gifty.villains[i].animate, class: "col-xs-12 col-sm-4 col-md-4 col-lg-4 float-left"}));
		}


	gifty.initiateArray = false;
}
//not the first time no need to define properties
else
{
	console.log("do me");
	for(var i = 0; i < 4; i++){
		gifty.villains.push({ villain: addVillain, rating: data.data[i].rating, animate: data.data[i].images.fixed_height.url });
	}

	console.log(gifty);
		console.log(gifty.villains.length - 4);
 	
 	 $("#allImages").append($('<div>', {class: "row", id: "two"}));
			$('.row').append($('<div>'));

			for(var i = gifty.villains.length -4; i < gifty.villains.length; i++){
				$('#two').prepend($('<img>', {src: gifty.villains[i].animate, class: "col-xs-12 col-sm-4 col-md-4 col-lg-4 float-left"}));
			}


}


 




















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

