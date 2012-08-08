/*
 Scene Collection :
*/

define([
		'jquery', 
		'backbone',
		'underscore',
		'_models/scene',], 

function($, Backbone, _, Scene){
	
	var SceneCollection = Backbone.Collection.extend({
		 model: Scene
	});
	
	return SceneCollection;
});
