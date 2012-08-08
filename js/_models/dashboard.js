/* Extends Scene model for fighter pilot specific data */

define(['jquery', 'backbone', 'underscore'], function($, Backbone, _){
	var Dashboard = Backbone.Model.extend({

		defaults: function() {
	      return {
	        title: "empty dashboards"
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
	
	return Dashboard;
});
