$(document).ready(function(e) {
	
	function createStationList(gasStations){
		$('#allStations').empty();
		for(var i=0; i<gasStations.length; i++){
			var stationContainer = $('<ul/>', {
				'id': 'station' + i,
				'class': 'gasStation gradBkgd'
			}).appendTo('#allStations');
			
			$('<li/>', {
				'class': 'stationName',
				'html': gasStations[i].station
			}).appendTo(stationContainer);
			
			$('<li/>', {
				'class': 'address',
				'html': gasStations[i].address
			}).appendTo(stationContainer);
			
			$('<li/>', {
				'class': 'address',
				'html': gasStations[i].region  + ' ' + gasStations[i].zip
			}).appendTo(stationContainer);
			$('<li/>', {
				'class': 'price',
				'html': '"Regular" Fuel Price: ' + gasStations[i].price
			}).appendTo(stationContainer);
			
			$('<span/>', {
				'class': 'directionLink',
				'data-address': gasStations[i].address  + ' ' + gasStations[i].region  + ' ' + gasStations[i].zip,
				'html': 'Get Directions'
			}).appendTo(stationContainer);
		}
		$('#returnedStations').show();
	}
	
	function returnCoordinates(address){
		var geocoder = new google.maps.Geocoder();
		var geocoderRequest = { address: address };
		geocoder.geocode(geocoderRequest, function(results, status){
			if(results[0] != undefined){
				gasApi(results[0].geometry.location.lat(), results[0].geometry.location.lng());
			}
		});
	}

	function gasApi(lat, lng){
		$('#distance').html(searchRadius);
		$.ajax({
			 type : "GET",
			 dataType : "json",
			 url : "http://devapi.mygasfeed.com/stations/radius/" + lat + "/" + lng + "/" + searchRadius + "/reg/Distance/rfej9napna.json?callback=?",
			 success: function(data){
				 //console.log(data);
				   createStationList(data.stations);
				   stations = data.stations;
				   plotMap(lat, lng);
			 }
		});
	}
	
	var mapOptions;
	var map;
	var stations;
	var markersArray = [];
	
	function plotMap(lat, lng){
		mapOptions = {
		center: new google.maps.LatLng(lat, lng),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	  };
	  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	  var latlng2 = new google.maps.LatLng(lat, lng);
	  var circ = new google.maps.Circle();
    	circ.setRadius(searchRadius * 1609.0);
    	circ.setCenter(latlng2);
    	map.setCenter(latlng2);
    	map.fitBounds(circ.getBounds());
		for(var i=0; i<stations.length; i++){
			//var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
			var markerLatLng = new google.maps.LatLng(stations[i].lat, stations[i].lng);
			var marker = new google.maps.Marker({
			  position: markerLatLng,
			  map: map/*,
			  icon: iconBase + 'schools_maps.png',
			  shadow: iconBase + 'schools_maps.shadow.png'*/
			});
			markersArray.push(marker);
		}
	}

	var initialLocation;
	var browserSupportFlag =  new Boolean();
	var currentLat;
	var currentLong;
	var latlng
	
	function getCurrentPosition(){
		if(navigator.geolocation) {
			browserSupportFlag = true;
			navigator.geolocation.getCurrentPosition(function(position) {
			
			  currentLat = position.coords.latitude;
			  currentLong = position.coords.longitude;
			
			  latlng = new google.maps.LatLng(currentLat, currentLong);
			  
			  /*var geocoder = new google.maps.Geocoder();
				var geocoderRequest = { latlng: latlng };
				geocoder.geocode({'latLng': latlng}, function(results, status) {
					$('#stationLocation').html(results[0].formatted_address);
					startAddress = results[0].formatted_address;
				});
			  
				gasApi(currentLat, currentLong);*/
			}, function() {
				//console.log('navigator.geolocation.getCurrentPosition');
				//console.log($('#useCurrentLocation'));
				$('#useCurrentLocation').hide();
			  //handleNoGeolocation(browserSupportFlag);
			});
		  }else {
			$('#selectLocation').show();
			browserSupportFlag = false;
		  }
	}
	
	getCurrentPosition();
	
	function initialize() {
		
	  //if(navigator.geolocation) {
		/*browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position) {
		console.log(position);
		  var currentLat = position.coords.latitude;
		  var currentLong = position.coords.longitude;
		
		  var latlng = new google.maps.LatLng(currentLat, currentLong);*/
		  
		  var geocoder = new google.maps.Geocoder();
			var geocoderRequest = { latlng: latlng };
			geocoder.geocode({'latLng': latlng}, function(results, status) {
				$('#stationLocation').html(results[0].formatted_address);
				startAddress = results[0].formatted_address;
			});
		  
		  	gasApi(currentLat, currentLong);
		//}, function() {
			//console.log('navigator.geolocation.getCurrentPosition');
		  //handleNoGeolocation(browserSupportFlag);
		//});
	  /*}else {
		$('#selectLocation').show();
		browserSupportFlag = false;
	  }*/
	}
	
	var searchRadius = 1;
	var startAddress;
	
	//$('#address').click(function(e) {
	$(document).delegate("#address", "click", function() {
		$('#selectLocation').hide();
		var street = $('#streetInput').val();
		var suburb = $('#suburbInput').val();
		var city = $('#cityInput').val();
		var country = $('#countryInput').val();
		searchRadius = $('#searchRadius').val();
		
		var address = '';
		if(street != '' && street != undefined){
			address = street;
		}
		if(suburb != '' && suburb != undefined){
			address = address + ', ' + suburb;
		}
		if(city != '' && city != undefined){
			address = address + ', ' + city;
		}
		if(country != '' && country != undefined){
			address = address + ', ' + country;
		}
		$('#stationLocation').html(address);
		startAddress = address;
        returnCoordinates(address);
		return false;
    });
	
	//$('#currentLocation').click(function(e) {
	$(document).delegate("#currentLocation", "click", function() {
		$('#selectLocation').hide();
		searchRadius = $('#searchRadius').val();
		initialize();
		return false;
	});
	
	function removeMarkers(){
		if (markersArray) {
			for (i in markersArray) {
			  markersArray[i].setMap(null);
			}
		  }
	}
	
	var polys = [];
	
	function clearAll() {
		directionsDisplay.setMap(null);
	}
	
	var directionsDisplay= new google.maps.DirectionsRenderer();
	var directionsService = new google.maps.DirectionsService();
	
	function writeDirections(directions){
		$('#writtenDirections').empty();
		$('<h2/>', {
			'id': 'directionHeader',
			'html': 'Directions'
		}).appendTo($('#writtenDirections'));
		for(var i=0; i<directions.length; i++){
			$('<li/>', {
				'class': 'writtenDirection',
				'html': '<span class="lightText">Step ' + (i + 1) + ': </span>' + directions[i].instructions
			}).appendTo($('#writtenDirections'));
		}
		$('#directions').show();
		$('body').scrollTop(0);
	}
	
	function setDirections(start, end){
		var request = {
			origin:start,
			destination:end,
			travelMode: google.maps.TravelMode.DRIVING
		  };
		  directionsService.route(request, function(result, status) {
			if (status == google.maps.DirectionsStatus.OK) {
			  directionsDisplay.setDirections(result);
			  writeDirections(result.routes[0].legs[0].steps);
			}
  		});
	}
	
	//$('#allStations').delegate(".directionLink", "click", function() {
	$(document).delegate(".directionLink", "click", function() {
		removeMarkers();
		clearAll();
		directionsDisplay.setMap(map);
        setDirections(startAddress, $(this).attr('data-address'));
    });
	
	//$('.resetLocator').click(function(e) {
	$(document).delegate(".resetLocator", "click", function() {
		$('#writtenDirections').empty();
        $('#selectLocation').show();
		$('#returnedStations').hide();
		//$('#directions').hide();
    });
	
});