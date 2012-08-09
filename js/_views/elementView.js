/*
 Element View : Based on the type of element it renders appropriately
*/

define([
		'jquery', 
		'backbone',
		'underscore',
		'_models/element',
		'config'], 

function($, Backbone, _, Element){
	
	var ElementView = Backbone.View.extend({

		events: {
        	// any user events (clicks etc) we want to respond to
    	},

		initialize: function(){
			this.model = new Element({
				title: 'Initialized Element Title'
			});
		},
		
		render: function(){
			if(this.model.get("targetContainer") != "none")
			{
				if(this.model.get("elementType") != "")
				{
					if(this.model.get("elementType") == "staticContent")
					{
						$(this.model.get("targetContainer")).load(this.model.get("contentPath")); // append content to targer container
					}
					if(this.model.get("elementType") == "feedContent")
					{
						alert("feedContent content");
					}
					if(this.model.get("elementType") == "JSONContent")
					{
						$.getJSON(this.model.get("contentURL"), this.processJSON);
					}
				}
				else{
					console.log("no element type specified");
				}
			}
			else{
				console.log("no target container specified");
			}
		},

		processJSON: function(data) {

			// Start putting together the HTML string
		    var htmlString = "";
		    
		    // Now start cycling through our array of Flickr photo details
		    $.each(data.items, function(i,item){
		    
		        // I only want the ickle square thumbnails
		        var sourceSquare = (item.media.m).replace("_m.jpg", "_s.jpg");
		        
		        // Here's where we piece together the HTML
		        htmlString += '<li><a href="' + item.link + '" target="_blank">';
		        htmlString += '<img title="' + item.title + '" src="' + sourceSquare;
		        htmlString += '" alt="'; htmlString += item.title + '" />';
		        htmlString += '</a></li>';
		    
		    });

		    // Pop our HTML in the #images DIV
    		$("#JSONContainer").html(htmlString); // this doesn't run in time/....

		},

		clear: function() {
		  $(this.model.get("targetContainer")).html("");	
	      this.model.clear();
	    }

	});
	
	return ElementView;
});
