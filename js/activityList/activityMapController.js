steal(
	  'js/activityList/activityModel.js',
      function($){
		// THE CONTROLLER SETS UP LISTENER FUNCTIONS, CALLS VIEWS AND SETS UP EVENTS
		$.Controller("Map",
            {
            defaults: {
                activities: '',
				map: '',
				mapOptions: ''
            }
            
		  },
		  {
		  "init" : function( element , options ){
			  this.activities = options.activities;
			  //SUBSCRIBE TO EVENT BEFORE GETTING COORDINATES AND CREATING MAP
			  this.getCoordinates(this.activities);
			  this.createMap();
		  },
		  getCoordinates : function(activities){
			  var test;
			  for(var i=0; i<activities.length; i++){
				  var activityLat = activities[i].latitude;
				  if(activityLat == ""){
					  var address = activities[i].address + ' ' + activities[i].suburb + ' ' + activities[i].city + ' ' + activities[i].zipcode;
					  this.returnCoordinates(address);
				  }else{
					  
				  }
			  }
			},
			returnCoordinates : function(address){
				var geocoder = new google.maps.Geocoder();
				var geocoderRequest = { address: address };
				var controller = this;
				geocoder.geocode(geocoderRequest, function(results, status){
					if(results[0] != undefined){
						controller.plotMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
					}else{
						return false;
					}
				});
			},
			createMap : function(){
				mapOptions = {
					center: new google.maps.LatLng(41.78, 87.75), // CURRENTLY SET AT CHICAGO LOCATION
					zoom: 8,
					mapTypeId: google.maps.MapTypeId.ROADMAP
			  	};
				this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
				/*var latlng = new google.maps.LatLng(lat, lng);
				var circ = new google.maps.Circle();
    			circ.setRadius(searchRadius * 1609.0);
				circ.setCenter(latlng);
				thisController.options.map.setCenter(latlng);
				thisController.options.map.fitBounds(circ.getBounds());*/
			},
			plotMap : function(lat, lng){
				var map = this.map;
				var markerLatLng = new google.maps.LatLng(lat, lng);
				var marker = new google.maps.Marker({
				  position: markerLatLng,
				  map: map
				});
			}
		})
});