/*! main.js */
require.config({
  paths : {
		    'jquery'              : "lib/jquery-1.7.2.min",
        'underscore'          : "lib/underscore-1.3.3.min",
        'backbone'            : "lib/backbone-0.9.2.min",
        'order'               : 'lib/requirejs-plugins/order',
        'async'               : 'lib/requirejs-plugins/async',
        'text'                : 'lib/requirejs-plugins/text',
        'ajax-content-loader' : 'modules/ajax-content-loader',
        'helper-functions'    : 'modules/helper-functions',
        'youtube-helper'      : 'modules/youtube-helper',
        'config-pages'        : 'config'
	},
  baseUrl: "js/",
  appDir: "../",   
  urlArgs: "bust=" +  (new Date()).getTime()  //cache-busting for development
  ,
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


require([
    'underscore',
    'backbone',
    '_views/appView',
    'routers/appRouter',
    '_models/scene',
    '_collections/sceneCollection',
  ], 
  function(_, Backbone, AppView, AppRouter, Scene, SceneCollection){
  
    var appCore = {

      init : function() {

        this.appView = new AppView();
        this.appRouter = new AppRouter(this.appView);  

        // Initialize the application view

        // setup app routing
        Backbone.emulateHTTP = true;
        Backbone.emulateJSON = true;
        Backbone.history.start();

        appCore.setupScenes();

      }, 

      setupScenes : function() {
           var homeScene = new Scene({ sceneRef: "home", title: "Home - Login and Registration" ,contentPath:"js/content/home.html",cssIdentifier:"home"});
           var tamworthScene = new Scene({ sceneRef: "tamworth", title: "Tamworth Base" ,contentPath:"js/content/tamworth.html",cssIdentifier:"tamworth"});
           var pierceScene = new Scene({ sceneRef: "pierce", title: "Pierce Base" ,contentPath:"js/content/pierce.html",cssIdentifier:"pierce"});

           var sceneCollection = new SceneCollection([homeScene,tamworthScene,pierceScene]);
           this.appView.setScenes(sceneCollection);
           this.appView.changeScene("home");
      }

    } // end appCore

    // when ready initialise
    $(function() {
      appCore.init();   
    });

});
