// findOne : "GET /api/profiles/{id}",
$.Model('Profiles', {
    attributes: {
      cookie: 'profile',
      storedId:  null
    },
	findAll : "GET /api/profile/provision",
	findOne : "GET /api/profiles/{id}",
	create  : "POST /profiles",
	update  : "PUT /profiles/{id}",
	destroy : "DELETE /profiles/{id}"
}, {}
)
