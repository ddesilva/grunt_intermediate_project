/*
Default Application View :
*/

define([
		'jquery', 
		'backbone',
		'underscore',
		'text'
		], 

function($, Backbone, _, model){
	
	var AppView = Backbone.View.extend({
		
        title: "Default Application Title",
        curSceneRef: "home",
        currUser:"",
        sceneCollection:{},
	    el: '#appContainer',

		events: {
        // any user events (clicks etc) we want to respond to
    	},

		initialize: function(){
			this.title= 'Initialized Application Title';
		},

		changeScene: function(_curSceneRef){
			this.clear();

			//check if the scene name exists in the collections
			if(this.sceneCollection.length>0)
			{
				var tmpScenes = this.sceneCollection.where({sceneRef: _curSceneRef});
				if(tmpScenes.length>0)
				{
					this.curSceneRef = _curSceneRef;
					this.render();
				}
				else{
					alert("The scene you requested cannot be found");
				}
			}
			else{
				console.log("no collection");
			}
			
		},

		setScenes: function(_sceneCollection)
		{
			this.sceneCollection = _sceneCollection;
		},

		getCurrentScene: function(){

            var tmpScenes = this.sceneCollection.where({sceneRef: this.curSceneRef});
            if(tmpScenes.length>0)
            {
            	return tmpScenes[0];
            }
            else{
            	return null;
            }
        },

		render: function(){
			//$(this.el).append( this.getCurrentScene().get("title"));
			$('body').addClass(this.getCurrentScene().get("cssIdentifier")); // set body class to css Identifier
			$(this.el).load(this.getCurrentScene().get("contentPath")); // append content to targer container
		},

		clear: function() {
	      $(this.el).html("");
	    }

	});
	
	return AppView;
});
