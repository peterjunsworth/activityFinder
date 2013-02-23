steal(
	'jquery/class',
	'jquery/model',
	'jquery/view/ejs',
	'jquery/controller',
	'jquery/lang/openajax',
	'jquery/controller/subscribe')
	.then(
		'js/members/membersController.js',
		'js/members/memberModel.js')
	.then(
			
	function($){
    
    	var membersModel = new Member();
		var memberView = 'js/members/memberView.ejs';
		var memberId = 0; // THIS VALUE IS DYNAMIC
    	var membersController = new Members($('#member'), {memberView: memberView, model: membersModel, memberId: memberId});
    
		membersModel.bind('loaded', function(ev, val){
			console.log('member loaded');
		})
	}
);

	