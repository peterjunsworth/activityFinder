steal(
      function($){

	  $.Model('Member',{
		findAll : "GET js/members/members.json",
		findOne : "GET /members/{id}",
		create  : "POST js/members/members.json",
		update  : "PUT /members/{id}",
		destroy : "DELETE /members/{id}"
	  },
	  {})
	}
);
