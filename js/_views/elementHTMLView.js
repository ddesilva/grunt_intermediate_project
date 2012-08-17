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
		
		render: function(){
			if(this.model.get("targetContainer") != "none")
			{
				if(this.model.get("elementType") != "")
				{
					this.processStaticHTML();	
				}
				else{
					console.log("no element type specified");
				}
			}
			else{
				console.log("no target container specified");
			}
		},

		processStaticHTML:function()
		{
			var self = this;
			$.get(self.model.get("contentPath"), function(markup) { // load content
				 $(self.model.get("targetContainer")).html(markup); // render content
			});

		}

	});
	
	return ElementView;
});
