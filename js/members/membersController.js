steal(
	  'js/members/memberModel.js',
      function($){
		// THE CONTROLLER SETS UP LISTENER FUNCTIONS, CALLS VIEWS AND SETS UP EVENTS
		$.Controller("Members",
            {
            defaults: {
                memberView: '',
				model: '',
				loaded: false,
				id: 0
            }
            
		  },
		  {
		  "init" : function( element , options ){
		    this.viewTemplate = options.memberView;
			this.model = options.model;
			this.id = options.id;
			var thisController = this;
			var members = Member.findAll({}, memberResponse, error)
			
			/* #################### Model Callbacks #################### */
			function memberResponse(data) {
				var member = data.members[thisController.options.id];
			     thisController.element.append(thisController.viewTemplate, [member]);
			     thisController.options.model.attr('loaded', true);
			}
			function error(data){
				console.log(data);
			}
		  },
		  /*"{Activity} created" : function(Activity, ev , activity){
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
			}*/
		})
	}
);