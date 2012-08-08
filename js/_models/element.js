/* Dashboard model. think of this as a scene */

define(['jquery', 'backbone', 'underscore'], function($, Backbone, _){
	var sceneElement = Backbone.Model.extend({

		defaults: function() {
	      return {
	        title: "empty sceneElement"
	      };
	    },

	    initialize: function() {
	      if (!this.get("title")) {
	        this.set({"title": this.defaults.title});
	      }
	    },

	    clear: function() {
	      this.destroy();
	    }

	});
	
	return sceneElement;
});
