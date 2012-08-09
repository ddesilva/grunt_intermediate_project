/*
 Application View :
*/

define([
		'jquery', 
		'backbone',
		'underscore',
		'_models/scene',
		'_views/elementView'
		], 

function($, Backbone, _, Scene, ElementView){
	
	var SceneView = Backbone.View.extend({

		events: {
        	// any user events (clicks etc) we want to respond to
    	},

		initialize: function(){
			this.model = new Scene({
				title: 'Initialized Scene Title'
			});
		},
		
		render: function(){
			if(this.model.get("targetContainer") != "none")
			{
				$('body').addClass(this.model.get("cssIdentifier")); // set body class to css Identifier
				$(this.model.get("targetContainer")).load(this.model.get("contentPath")); // append content to targer container
			}
			else{
				console.log("no target container specified");
			}
			if(this.model.elementCollection.length>0)
			{
				this.model.elementCollection.each(function(_element){
					var elementView = new ElementView();
					elementView.model = _element;
					elementView.render();
				});

			}
		},

		addElement:function(_element){
			//this.model.elementCollection.add(_element);
		},

		clear: function() {
		  $(this.model.get("targetContainer")).html("");	
	      this.model.clear();
	    }

	});
	
	return SceneView;
});
