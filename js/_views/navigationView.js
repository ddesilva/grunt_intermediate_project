/*
 Navigation View :
*/

define([
		'jquery', 
		'backbone',
		'underscore',
		'_models/scene',
		'_collections/sceneCollection',
		], 

function($, Backbone, _, Scene, SceneCollection){
	
	var NavigationView = Backbone.View.extend({

		events: {
        	// any user events (clicks etc) we want to respond to
    	},
    	targetContainer:"",
    	sceneCollection:{},
    	template:"",

		initialize: function(_sceneCollection, _targetContainer, _template){
			this.sceneCollection = _sceneCollection;
			this.targetContainer = _targetContainer;
			this.template = _template;
		},
		
		render: function(){

			$(this.targetContainer).html(""); // clear the container

			var self = this;

		    $.get(self.template, function(markup) { // load template
			  var compiledTmpl = _.template(markup,  { scenes: self.sceneCollection.models }); // compile template
			  $(self.targetContainer).html(compiledTmpl); // render template
			});

		},

		clear: function() {
		  $(this.targetContainer).html("");
	    }

	});
	
	return NavigationView;
});
