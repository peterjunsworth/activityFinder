steal(
	'jquery/class',
	'jquery/model',
	'jquery/view/ejs',
	'jquery/controller',
	'jquery/lang/openajax',
	'jquery/controller/subscribe')
	.then(
		'js/animation.js',
		'js/activityList/activityListController.js',
		'js/activityList/activityModel.js',
		'js/activityList/activityMapController.js')
	.then(
			
	function($){
    
    	var activityModel = new Activity();
		var activityListView = 'js/activityList/activityListView.ejs';
		$('#searchActivities').click(function(e) {
            var activityController = new Activities($('#activityList'), {activityView: activityListView, model: activityModel});
        });
		activityModel.bind('activities', function(ev, val){
			var activityMap = new Map($('#mapSection'), {activities: val});
		});
    
		activityModel.bind('loaded', function(ev, val){
			//console.log(val);
			// Set up everything else
			
			//if($('body.home').length > 0) new Login($(document));
			
			/*if($('#uniquenessModel').length > 0) {
				
				steal(
				'js/widget/widgetController.js',
				'js/widget/widgetGroupController.js',
				'js/eye/eyeController.js',
				'js/accordion/accordionController.js',
				'js/eye/circleClass.js').then(
				
				function($){
					new WidgetGroup($(document), {model: profileMod});
					var circle = new Circle('.wheel');
					var eyeController = new Eye($(document), {model: profileMod, circleClass: circle});
					var accordionController = new Accordion($(document), {model: profileMod});
					var sliderController = new SliderController($(document), {model: profileMod});
					
					$('#uniquenessModel').show();
					$(".accordion").accordion({active: 2, autoHeight: false, navigation: true});
					$( '.innerAccordion').accordion({active: -1, autoHeight: false, navigation: true});
					
					var slider = $( ".slider" ).slider({value:3, min: 1, max: 5, step: 1,
						stop: function( event, ui ) {
							OpenAjax.hub.publish('accordion.slider.change', {'sliderData': ui});
						}
					});
				});
			}  */
			
			/* #################### WIZARD SETUP #################### */
			/*if($('#wants').length > 0 || $('#lives').length > 0) {
				steal('js/wizard/wizardController.js').then(
				function($){
					new Wizard($(document), {});
					var sliderController = new SliderController($(document), {});
					var slider = $( ".slider" ).slider({value:3, min: 1, max: 5, step: 1,
						stop: function( event, ui ) {
							OpenAjax.hub.publish('wizard.slider.change', {'sliderData': ui});
						}
					});
				});
			}*/ 
		})
    
		/*profileMod.bind('storedId', function(ev, val){
			console.log("set storedID:", val);
		})*/
		
		//var StudyService = {
		/*
		 * The request object must be of type String
		 */
		/*getStudy: function (request, successFunction, failureFunction) {
		  var urlStr = '';
		  $.ajax({
			url: encodeURI('study/StudyServiceController/getStudy'+urlStr),
			dataType: 'json',
			data: JSON.stringify(request),
			contentType: 'application/json',
			type: 'POST',
			success: successFunction,
			error: failureFunction
		});
	  }
	}*/
});

	