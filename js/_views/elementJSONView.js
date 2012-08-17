/*
 Element View : Based on the type of element it renders appropriately
*/

define([
		'jquery', 
		'backbone',
		'underscore',
		'_models/element',
		'_views/elementView',
		'config',
		'handlebars'
		], 

function($, Backbone, _, Element, ElementView){
	
	var ElementJSONView = ElementView.extend({

		render: function(){

			if(this.model.get("targetContainer") != "none")
			{
				if(this.model.get("elementType") != "")
				{
					this.processJSON();
				}
				else{
					console.log("no element type specified");
				}
			}
			else{
				console.log("no target container specified");
			}
		},

		processJSON: function() {

			var me = this; // we use "me" as a closure to the object we clicked at

			$.getJSON(this.model.get("feedURL"),
				function(_JSONdata){
 
			    $.get(me.model.get("template"), function(markup) { // load template
				  var compiledTmpl = _.template(markup, _JSONdata); // compile template
				  $(me.model.get("targetContainer")).html(compiledTmpl); // render template
				});


			});

		}


	});
	
	return ElementJSONView;
});
