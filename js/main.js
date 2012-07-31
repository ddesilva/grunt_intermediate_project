/*! main.js */
require.config({
  paths : {
		    'jquery'              : "lib/jquery-1.7.2.min",
        'underscore'          : "lib/underscore-1.3.3.min",
        'backbone'            : "lib/backbone-0.9.2.min",
        'order'               : 'lib/requirejs-plugins/order',
        'async'               : 'lib/requirejs-plugins/async',
        'ajax-content-loader' : 'modules/ajax-content-loader',
        'helper-functions'    : 'modules/helper-functions',
        'youtube-helper'      : 'modules/youtube-helper',
        'config-pages'        : 'config'
	},

  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: function()  {
        return Backbone.noConflict();
      }
    },
    underscore: {
      exports : function() {
        return _.noConflict();
      }
    }
  }
});


require(["config", "backbone"], 

  function(config, backbone, underscore) {

  console.log("READY...", config);

   $(document).ready(function (){
    console.log("DOCUMENT READY...");
  });


});

