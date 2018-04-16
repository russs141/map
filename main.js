function initMap() {
	var latlong = {lat: 48.856614, lng: 2.352222};

	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 2.5,//map zoom level
	center: latlong //where the map is centered
	}); //ends map

	var marker = new google.maps.Marker({
		position: latlong,
		map: map 
	}); //specify which map its on


	var latlong = {lat: 35.689487, lng: 139.691706};
	var marker = new google.maps.Marker({
		position: latlong,
		map: map 
	});

	var latlong = {lat: 33.717471, lng: -117.831143};
	var marker = new google.maps.Marker({
		position: latlong,
		map: map 
	});

	var latlong = {lat: 64.963051, lng: -19.020835};
	var marker = new google.maps.Marker({
		position: latlong,
		map: map 
	});

	var latlong = {lat: 59.329323, lng: 18.068581};
	var marker = new google.maps.Marker({
		position: latlong,
		map: map 
	});

} //ends function
