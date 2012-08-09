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
    '_models/element',
    '_collections/elementCollection',
  ], 
  function(_, Backbone, AppView, AppRouter, Scene, SceneCollection, Element, ElementCollection){
  
    var appCore = {

      init : function() {

        // Initialize the application view
        this.appView = new AppView();
        appCore.setupScenes( this.appView);
       
        // setup app routing
        this.appRouter = new AppRouter(this.appView);  
        Backbone.emulateHTTP = true;
        Backbone.emulateJSON = true;
        Backbone.history.start();
        
      }, 

      setupScenes : function(_appView) {
           var homeScene = new Scene({ sceneRef: "home", title: "Home - Login and Registration" ,contentPath:"js/content/home.html",cssIdentifier:"home",targetContainer:"#appContainer"});
           var tamworthScene = new Scene({ sceneRef: "tamworth", title: "Tamworth Base" ,contentPath:"js/content/tamworth.html",cssIdentifier:"tamworth",targetContainer:"#appContainer"});
           var pierceScene = new Scene({ sceneRef: "pierce", title: "Pierce Base" ,contentPath:"js/content/pierce.html",cssIdentifier:"pierce",targetContainer:"#appContainer"});

           homeScene.elementCollection.add(new Element({elementRef:"0",elementType:"JSONContent",title:"flickerfeed",
              contentURL:"http://api.flickr.com/services/feeds/photos_public.gne?id=40840736@N06&lang=en-us&format=json&jsoncallback=?",
              targetContainer:"#elementContentDiv"}));

           var sceneCollection = new SceneCollection([homeScene,tamworthScene,pierceScene]);
           _appView.setScenes(sceneCollection);
           _appView.changeScene("home");
   
      }

    } // end appCore

    // when ready initialise
    $(function() {
      appCore.init();   
    });

});
