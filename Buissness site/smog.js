function RandomLoc(){
	var lat = Math.floor(Math.random() * 180) + 1;
	var lng = Math.floor(Math.random() * 360) + 1;
	if (lat >= 90){
		lat = lat-90;
	} else if (lat < 90) {
		var dif = 90 - lat;
		lat = dif * -1;
	}
	var myLatLng = {lat: lat, lng: lng};
	var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 5,
    	center: myLatLng
  	});

  	var marker = new google.maps.Marker({
    	position: myLatLng,
		map: map,
    	title: 'Hello World!',
    	icon:'icon.ico'
  	});
}
		
window.onload = function (){
    RandomLoc();
    setTimeout(RandomLoc(), 9000);
};
