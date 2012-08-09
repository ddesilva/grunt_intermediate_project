/*
 Element : Used for various sections in scene.

 Types: static, inline, feed, 
*/

define([ 
		'backbone', 
		'underscore',
		'config'
		], 

function(Backbone, _,Config){

	var Element = Backbone.Model.extend({

		defaults: function() {
	      return {
	      	elementRef:"0",
	      	elementType:"",
	        title: "Default element name",
	        cssIdentifier: "",
	        contentPath:"",
	        contentURL:"",
	        content:"",
	        targetContainer:"none",
	        template:""
	      };
	    },

	    el: '#appContainer',

	    initialize: function() {

	      if (!this.get("elementRef")) {
	        this.set({"sceneRef": this.defaults.sceneRef});
	      }

	      if (!this.get("elementType")) {
	        this.set({"elementType": "staticContent"});
	      }

	      if (!this.get("title")) {
	        this.set({"title": this.defaults.title});
	      }

	      if (!this.get("targetContainer")) {
	        this.set({"targetContainer": this.defaults.targetContainer});
	      }
	    },

	    clear: function() {
	      this.destroy();
	    }

	});
	
	return Element;
});
