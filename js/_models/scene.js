/*
 Scene 
*/

define(['jquery', 'backbone', 'underscore'], function($, Backbone, _){
	var Scene = Backbone.Model.extend({

		defaults: function() {
	      return {
	      	sceneRef:"0",
	        title: "Default scene name",
	        cssIdentifier: "",
	        bgPath: "",
	        contentPath:""
	      };
	    },

	    initialize: function() {

	      if (!this.get("sceneRef")) {
	        this.set({"sceneRef": this.defaults.sceneRef});
	      }

	      if (!this.get("title")) {
	        this.set({"title": this.defaults.title});
	      }
	    },

	    clear: function() {
	      this.destroy();
	    }

	});
	
	return Scene;
});
