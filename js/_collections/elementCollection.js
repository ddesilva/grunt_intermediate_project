/*
 Element Collection :
*/

define([
		'backbone',
		'underscore',
		'_models/element'], 

function(Backbone, _, Element){
	
	var ElementCollection = Backbone.Collection.extend({
		 model: Element
	});
	
	return ElementCollection;
});
