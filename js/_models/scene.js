/*
 Scene 
*/

define([ 
		'backbone', 
		'underscore',
		'_models/element',
    	'_collections/elementCollection'
    	], 

function(Backbone, _,Element, ElementCollection){

	var Scene = Backbone.Model.extend({

		elementCollection:{},

		defaults: function() {
	      return {
	      	sceneRef:"0",
	        title: "Default scene name",
	        cssIdentifier: "",
	        bgPath: "",
	        contentPath:"",
	        targetContainer:"none"
	      };
	    },

	    initialize: function() {

	      if (!this.get("sceneRef")) {
	        this.set({"sceneRef": this.defaults.sceneRef});
	      }

	      if (!this.get("title")) {
	        this.set({"title": this.defaults.title});
	      }

	      if (!this.get("targetContainer")) {
	        this.set({"targetContainer": this.defaults.targetContainer});
	      }

	      this.elementCollection = new ElementCollection();

	    },

	    clear: function() {
	      this.destroy();
	    }

	});
	
	return Scene;
});
