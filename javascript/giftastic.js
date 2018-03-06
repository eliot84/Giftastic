

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
/*
					  	 $("#image").attr("src", url);

					  	 $("#allImages").append($('<div>', {class: "row", id: "this"}));
					  	 $(".row").append($('<div>', {class: "col-xs-12 col-sm-6 col-md-4 col-md-3", id: "inHere"}));
						/*$('#inHere').append($('<img>', {src: url, class: "float-left", id: "pic"}));
						$('#inHere').append($('<img>', {src: url, class: "float-left", id: "pic"}));
						$('#inHere').append($('<img>', {src: url, class: "float-left", id: "pic"}));
						$('#inHere').append($('<img>', {src: url, class: "float-left", id: "pic"})); */
					
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

