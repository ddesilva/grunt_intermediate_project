/*! main.js */

// add templates to scenes
// add event binding
// add Google feed API support

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
        'handlebars'          : 'lib/handlebars-1.0.0.beta.6',
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
    '_views/navigationView'
  ], 
  function(_, Backbone, AppView, AppRouter, Scene, SceneCollection, Element, ElementCollection, NavigationView){
  
    var appCore = {

      init : function() {

        // Initialize the application view
        appCore.appView = new AppView();
        appCore.setupScenes(appCore.appView);
        
       
        // setup app routing
        this.appRouter = new AppRouter(this.appView);  
        Backbone.emulateHTTP = true;
        Backbone.emulateJSON = true;
        Backbone.history.start();
        
      }, 

      setupScenes : function(_appView) {
          appCore.homeScene = new Scene({ 
                              sceneRef: "home", 
                              title: "Home - Login and Registration" ,
                              contentPath:"js/content/home.html",
                              cssIdentifier:"home",
                              template:'js/templates/pages/default-12-col-960.html',
                              targetContainer:"#appContainer"});

          appCore.tamworthScene = new Scene({ 
                              sceneRef: "tamworth", 
                              title: "Tamworth Base" ,
                              contentPath:"js/content/tamworth.html",
                              cssIdentifier:"tamworth",
                              template:'js/templates/pages/default-12-col-960.html',
                              targetContainer:"#appContainer"});

          appCore.pierceScene = new Scene({ sceneRef: "pierce", 
                              title: "Pierce Base" , 
                              contentPath:"js/content/pierce.html", 
                              cssIdentifier:"pierce", 
                              template:'js/templates/pages/default-12-col-960.html',
                              targetContainer:"#appContainer"});

          appCore.homeScene.elementCollection.add(new Element({elementRef:"0",elementType:"JSON",title:"flickerfeed",
          template:'js/templates/lists/default-json-list.html',
          feedURL:"http://api.flickr.com/services/feeds/photos_public.gne?id=40840736@N06&lang=en-us&format=json&jsoncallback=?",
          targetContainer:"#JSONContainer"}));

          appCore.homeScene.elementCollection.add(new Element({elementRef:"2",elementType:"HTML",title:"static content",
          contentPath:"js/content/someinnercontent.html",
          targetContainer:"#HTMLContainer"}));

          appCore.sceneCollection = new SceneCollection([appCore.homeScene,appCore.tamworthScene,appCore.pierceScene]);
          _appView.setScenes(appCore.sceneCollection);
          _appView.changeScene("home");

          appCore.navView = new NavigationView();
          appCore.navView.initialize(appCore.sceneCollection,"#navContainer","js/templates/lists/default-menu.html");
          appCore.navView.render();
      }

    } // end appCore

    // when ready initialize
    $(function() {
      appCore.init();   
    });

});
