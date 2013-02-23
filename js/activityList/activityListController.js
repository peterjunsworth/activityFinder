steal(
	  'js/activityList/activityModel.js',
      function($){
		// THE CONTROLLER SETS UP LISTENER FUNCTIONS, CALLS VIEWS AND SETS UP EVENTS
		$.Controller("Activities",
            {
            defaults: {
                activityView: '',
				model: '',
				loaded: false
            }
            
		  },
		  {
		  "init" : function( element , options ){
		    this.viewTemplate = options.activityView;
			this.model = options.model;
			var thisController = this;
			var allActivities = Activity.findAll({}, activityResponse, error)
			
			/* #################### Model Callbacks #################### */
			function activityResponse(data) {
			     thisController.element.append(thisController.viewTemplate, data.activities);
			     /*$.cookie(owner.options.model.attr('cookie'), response.profileId);
			     owner.options.model.attr('storedId', $.cookie(owner.options.model.attr('cookie')));*/
			     thisController.options.model.attr('loaded', true);
			}
			function error(data){
				console.log(data);
			}
		  },
		  "{Activity} created" : function(Activity, ev , activity){
			this.element.append(this.viewTemplate, [activity])
		  },
		  "{Activity} updated" : function(Activity, ev , activity){
			this.element.append(this.viewTemplate, [activity])
		  },
			submit : function(el, ev){
			  ev.preventDefault();
			  this.element.find('[type=submit]').val('Creating...');
			  new Activities(el.formParams()).save(this.callback('saved'));
			},
			saved : function(){
			  this.element.find('[type=submit]').val('Create');
			  this.element[0].reset();
			}
		})
		
		// INITIALIZE ON PAGE LOAD
		//var MVC = MVC || {};
		//var temp = MVC.viewRoute || 'js/activities/activityListView.ejs';
		//new Activities('#activityList', {viewTemplate: temp});
		
		
		
		// CREATE A NEW ACTIVITY
		
		/*var singleActivity = new Activity({
			id: 2,
			title: 'Surfing Today',
			time: "2:00 pm",
			day: 'Wednesday',
			suburb: 'Sumner',
			city: 'Christchurch',
			zipcode: '8081',
			involvement: 'independent',
			type: 'sport',
			activity: 'surfing',
			description: 'time for a wave'
		})
		
		// SAVE THE NEW ACTIVITY
		singleActivity.save();*/
		
  
  
});