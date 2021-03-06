/*
 Element View : Based on the type of element it renders appropriately
*/

define([
		'jquery', 
		'backbone',
		'underscore',
		'_models/element',
		'config'
		], 

function($, Backbone, _, Element){
	
	var ElementView = Backbone.View.extend({

		events: {
        	// any user events (clicks etc) we want to respond to
    	},

		initialize: function(){
			this.model = new Element({
				title: 'Initialized Element Title'
			});
		},
		
		render: function(){
			
			if(this.model.get("targetContainer") != "none")
			{
				if(this.model.get("elementType") != "")
				{
					$(this.model.get("targetContainer")).load(this.model.get("contentPath")); // append content to targer container
				}
				else{
					console.log("no element type specified");
				}
			}
			else{
				console.log("no target container specified");
			}
		},

		clear: function() {
		  $(this.model.get("targetContainer")).html("");	
	      this.model.clear();
	    }

	});
	
	return ElementView;
});
