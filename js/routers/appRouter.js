define([
	'jquery', 
	'backbone', 
	'underscore'
	], 

function($, Backbone, _){

	var AppRouter = Backbone.Router.extend({

		routes:{
			"*actions": "defaultRoute", 
		},
		initialize: function(_appView) {
			this.appView = _appView;
		},
		defaultRoute: function( actions ){
			if(actions.length>0)
          	{
          		this.appView.changeScene(actions);
          	}
        }
	});

	return AppRouter; 

});
