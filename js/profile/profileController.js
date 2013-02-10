steal('jquery/class',
      'jquery/controller',
      'jquery/model',
      'jquery/view/ejs',
      'jquery/dom/cookie')
	  .then(
	  'js/profile/profileModel.js',
	  'js/profile/provisionModel.js',
      function($){
          
       	$.Controller("Profile",
		  {
            defaults: {
                cookie: 'profile',
                count: 1,
                loaded: false
            }
            
		  },
		  {
		  "init" : function(){
    		
    		
    		this.options.model.attr('cookie', this.options.cookie);
    		this.options.model.attr('storedId', $.cookie(this.options.model.attr('cookie')));
    		
    		this.options.count = 5;
    		
    		var el = this.element;
    		var owner = this;
    		
    		if(this.options.model.attr('storedId')) {
    		  console.log("find profile for:", this.options.model.attr('storedId'));
    		  Profiles.findOne({id:this.options.model.attr('storedId')}, profileResponse, profileError);
    		} else {
    		  console.log("provision new profile");
    		  Provision.findOne({}, profileResponse)
    		}
    		
    		
    		/* ****** Model Callbacks ********* */
			function profileResponse(response) {
			     // Set profile ID here;
			     console.log("profile:", response);
			     $.cookie(owner.options.model.attr('cookie'), response.profileId);
			     
			     owner.options.model.attr('storedId', $.cookie(owner.options.model.attr('cookie')));
			     owner.options.model.attr('loaded', true);
			}
			
			function profileError(error) {
    			console.log("prof error:", error);
    			profileId = null;
    			Provision.findOne({}, profileResponse)
			}
			
			/* ****** Model Events ********* */
			
			this.options.model.bind('storedId', this.storedIdChange);
		  },
		  storedIdChange: function(ev, el){
    		  console.log("ID change func:", ev, el);
		  },
		  "{Activity} created" : function(Activity, ev , activity){
			//this.element.append(this.viewTemplate, [activity])
		  },
		  ".login-home click": function(el, opt) {
    		//console.log("main click");
    		//console.log(this.options.count = 2);  
		  },
		  "{count} bind" : function(Profiles, ev , activity){
			//this.element.append(this.viewTemplate, [activity])
			console.log("event bound eh?");
		  }
		})
		
		
		
  
});