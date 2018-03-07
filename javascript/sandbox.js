
var makeDisplay = function(value){
		 $("#sandbox").append($('<div>', {class: "row"}));
			//$('.row').append($('<div>'));

	//$("#sandbox").append($('<div>', {class: "bluebox", id: "aDiv1"} ));
	//$("#sandbox").append($('<div>', {class: "bluebox", id: "aDiv1"} ));
	for(var i = 0; i < 5; i++)
	{
		console.log("do it");
	$('.row').append($('<div>', {class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 float-left", id: "col" + [i]}));
	$('#col' + [i]).append($('<div>', {class: "contentHolder" + [i]}));
	$(".contentHolder" + [i]).text("HELLO WORLD" + [i]);
	$(".contentHolder" + [i]).append($('<img>', {src: "images/pic.gif"} ))	
	}
}
	


console.log("sandbox is in!");


//$('#allImages').append($('<div>', {class: "row"}));

/*
  	 $("#allImages").append($('<div>', {class: "row"}));
			$('.row').append($('<div>'));
			
				$('.row').append($('<div>', {id: "red", class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 float-left"}));
				$('.row').append($('<div>', {id: "red", class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 float-left"}));
				$('.row').append($('<div>', {id: "red", class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 float-left"}));
				$('.row').append($('<div>', {id: "red", class: "col-xs-12 col-sm-6 col-md-4 col-lg-3 float-left"}));
			*/		
/*
		$('.row').append($('<img>', {class: "float-left", src: "images/pic.gif"}));
		$('.row').append($('<img>', {class: "float-left", src: "images/pic.gif"}));
		$('.row').append($('<img>', {class: "float-left", src: "images/pic.gif"}));
		$('.row').append($('<img>', {class: "float-left", src: "images/pic.gif"}));

	*/	

/*
const gifty = {};

Object.defineProperty(gifty, 'villains', { value: [{villain: "joker", url: "www"}] }); 
Object.defineProperty(gifty, 'villains', { value2: [{villain: "catwoman", url: "wwww"}] }); 
Object.defineProperty(gifty, 'villains', { value3: [{villain: "catwoman", url: "wwww"}] }); 
*/




//Object.defineProperty(object1, 'value', {value: [{value: 42, writable: false}] });
