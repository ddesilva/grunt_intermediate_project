/*
 Application View :
*/

define([
		'jquery', 
		'backbone',
		'underscore',
		'_models/scene',], 

function($, Backbone, _, model){
	
	var SceneView = Backbone.View.extend({

		el: '#appContainer',

		events: {
        // any user events (clicks etc) we want to respond to
    	},

		initialize: function(){
			this.model = new model({
				title: 'Initialized Application Title'
			});

			// bind events
	        this.bind("change:curSceneRef", function(){
                console.log("Changed curSceneRef to " + this.get("curSceneRef") );
            });
		},
		
		render: function(){
			// set body class to css Identifier
			// get content
			// append content to targer container
			$(this.el).append( this.model.get("title"));
		},

		clear: function() {
	      this.model.clear();
	      $(this.el).html("");
	    }

	});
	
	return SceneView;
});
