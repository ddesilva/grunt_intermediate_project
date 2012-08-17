/*
 Scene View :
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
				var self = this;
				
				// set page styles and clear existing
				$('body').attr("class",this.model.get("cssIdentifier")); // set body class to css Identifier
				$(this.model.get("targetContainer")).html("");	// clear existing content

				// load content if any
				$.get(self.model.get("contentPath"), function(content) { // load content
				  	self.model.set("content",content); // set content param here as we dont want to preload

				  	// set template
				    $.get(self.model.get("template"), function(markup) { // load template markup

						 var compiledTmpl = _.template(markup, { scene : self.model } ); //create template
						 $(self.model.get("targetContainer")).html(compiledTmpl); // inject template into container

						 self.model.elementCollection.render(); // render any page elements
					});

				});

			}
			else{
				console.log("no target container specified");
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
