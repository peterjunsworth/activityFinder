steal(
      function($){

  $.Model('Activity',{
    findAll : "GET js/activityList/activities.json",
    findOne : "GET /activities/{id}",
    create  : "POST /activities",
    update  : "PUT /activities/{id}",
    destroy : "DELETE /activities/{id}"
  },
  {})
});
		
	  //})

  // THE INITIAL ARRAY OF ACTIVITIES
	/*var ACTIVITIES = [
		{
			id: 0,
			title: 'Golf Evening Drinking',
			time: "5:00 pm",
			day: 'Friday',
			suburb:  null,
			city: 'Oak park',
			zipcode: '60302',
			involvement: 'participation',
			type: 'sport',
			activity: 'golf',
			description: 'Need a 4th for golf'
		},
		{
			id: 1,
			title: 'Surfing Comp',
			time: "2:00 pm",
			day: 'Wednesday',
			suburb: 'Sumner',
			city: 'Christchurch',
			zipcode: '8081',
			involvement: 'independent',
			type: 'sport',
			activity: 'surfing',
			description: 'Next Wednsday evening'
		}
	];*/
	
	/*var getOne = function(index) {
    	return ACTIVITIES[index];
	}*/
	
	
// findAll
	/*$.fixture("GET /activities", function(orig){
	  return [ACTIVITIES]
	});
	
	$.fixture("GET /activities/one/{id}", function(orig){
	 
	  if(orig.data.id > ACTIVITIES.length) {
    	  return [401,"{type: 'unauthorized'}"]
	  } else {
    	  return [200, "success", {json: ACTIVITIES[orig.data.id] }, {} ];
	  }
	  
	});

	
$.fixture("GET /activities/{id}", function(orig){
	  console.log("get one:", orig);
	   for (var i=0; i<ACTIVITIES.length-1; i++) {
	       console.log("act", ACTIVITIES[i]);
    	   if(ACTIVITIES[i]) {
        	   //if(ACTIVITIES[i].id == orig.data.id) return ACTIVITIES[i];
    	   } 
	   }
	  return null;
	});


	
	// create
	$.fixture("POST /activities", function(){
	  return {id: (ACTIVITIES.length + 1)}
	})
	
	// update
	$.fixture("PUT /activities/{id}", function(){
	  return {};
	})
	
	// destroy
	$.fixture("DELETE /activities/{id}", function(){
	  return {};
	})*/

	
	// BIND LISTENERS
	//Activity.bind('created', function(ev, singleActivity){/* callback */})
	//Activity.bind('updated', function(ev, singleActivity){/* callback */})
	
	