


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

console.log("yyo");
/*
const gifty = {};

Object.defineProperty(gifty, 'villains', { value: [{villain: "joker", url: "www"}] }); 
Object.defineProperty(gifty, 'villains', { value2: [{villain: "catwoman", url: "wwww"}] }); 
Object.defineProperty(gifty, 'villains', { value3: [{villain: "catwoman", url: "wwww"}] }); 
*/

const object1 = {villains: {
	configurable: true
}};

Object.defineProperty(object1, 'villains', { 
	//configurable: true,
	value: [{villain: "Ursela", rating1: "xxx", animate1: "yyy"}] });
//Object.defineProperty(object1, 'villains', {value: [{villain: "Hook", url: "wwww"}] });

	
//object1.villains.push({villain: "hook",  url: "xxx" });




console.log(object1.villains[0].villain);


console.log(object1);


//Object.defineProperty(object1, 'value', {value: [{value: 42, writable: false}] });