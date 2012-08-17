/*
 Element Collection :
*/

define([
		'backbone',
		'underscore',
		'_models/element',
		'_models/elementHTML',
		'_models/elementJSON',
		'_views/elementView',
		'_views/elementHTMLView',
		'_views/elementJSONView'
		], 

function(Backbone, _, Element, ElementHTML, ElementJSON, ElementView, ElementHTMLView, ElementJSONView){
	
	var ElementCollection = Backbone.Collection.extend({
		 model: Element,
		 url: "api/getElementsByScene",

	    render: function()
	    {
	    	if(this.length>0)
			{
				this.each(function(_element){

					if(_element.get("elementType") === "")
					{
						var elementView = new ElementView();
						elementView.model = _element;
						elementView.render();
					}

					if(_element.get("elementType") === "HTML")
					{
						var elementView = new ElementHTMLView();
						elementView.model = _element;
						elementView.render();
					}
					
					if(_element.get("elementType") === "JSON")
					{
						var elementView = new ElementJSONView();
						elementView.model = _element;
						elementView.render();
					}

				});
			}
	    }
	});
	
	return ElementCollection;
});
