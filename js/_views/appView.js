/*
Default Application View :
*/

/*
 Application View.  
*/


define([
		'jquery', 
		'backbone',
		'underscore',
		'_models/scene',
		'_views/sceneView'
		], 

function($, Backbone, _, Scene, SceneView){
	
	var AppView = Backbone.View.extend({
		
        title: "Default Application Title",
        currentSceneView:{},
        sceneCollection:{},
        currUser:"",
	    targetContainer: '#appContainer',

		events: {
        	// any user events (clicks etc) we want to respond to
    	},

		initialize: function(){
			this.title= 'Initialized Application Title';
		},

		setScenes: function(_sceneCollection)
		{
			this.sceneCollection = _sceneCollection;
		},

		changeScene: function(_curSceneRef){
			this.clear();

			//check if the scene name exists in the scene collection
			if(this.sceneCollection.length>0)
			{
				var tmpScenes = this.sceneCollection.where({sceneRef: _curSceneRef}); // not the best construct to find this.
				if(tmpScenes.length>0)
				{
					this.currentSceneView = new SceneView({model: Scene})
					this.currentSceneView.model = tmpScenes[0];
					this.renderScene(this.currentSceneView);
				}
				else{
					alert("The scene you requested cannot be found");
				}
			}
			else{
				console.log("no collection");
			}
		},

		getCurrentScene: function()
		{
            return this.currentSceneView;
        },

		renderScene: function(_sceneView){
			_sceneView.render();
		},

		generateNavigation:function (_targetContainer){
			//psuedocode : go through scene collection and create a nested list with anchor tags pointing to the sceneRef.
		},

		clear: function() {
	      $(this.targetContainer).html("");
	    }

	});
	
	return AppView;
});


/*// bind events
this.bind("change:curSceneRef", function(){
    console.log("Changed curSceneRef to " + this.get("curSceneRef") );
});*/