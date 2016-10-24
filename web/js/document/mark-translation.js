// This jQuery plugin implements the $.fn.highlightText method
// making it easy to highlight text within an element by wrapping
// it in a span with a given class.
//
// To use this plugin, first select the element that contains the text
// that you want to replace, then call .highlightText() on it.
// the plugin has one required parameter and two optional parameters.
//
// The plugin is always called in the same way:
// $(sel).highlightText(<parameters>);
// It accepts three parameters.
//
// The first parameter decides what text will be matched. It can be a
// string, a regular expression in string format, a regular expression
// object, or an array of words.
//
// The second parameter is the class that will be added to the matched
// text. it is optional and can be a space delimited list of classes to
// add to the element that wraps the matched text. It is set to "highlight"
// by default.
//
// The third parameter lets you decide whether or not the plugin should
// only match full matches. It is defaulted to false, meaning it will
// match partial matches. However, this third parameter is ignored if
// the first parameter is a regular expression object.
(function (factory) {
	if (typeof module === "object" && typeof module.exports === "object") {
		factory(require("jquery"), window, document);
	} else {
		factory(jQuery, window, document);
	}
}(function ($, window, document){

	$.fn.highlightText = function () {
		// handler first parameter
		// is the first parameter a regexp?
		var re,
			hClass = "mark-translation",
			reStr,
			argType = $.type(arguments[0]),
			defaultTagName = $.fn.highlightText.defaultTagName,
			translations,
			link;

		if ( argType === "string" ) {
			// store string in regular expression string
			// for later use
			reStr = arguments[0];
		}
		// else, return out and do nothing because this
		// argument is required.
		else {
			return;
		}
		
		
		//arguments[1] => les traductions disponibles du mots français.
		argType = $.type(arguments[1]);
		if ( argType === "array" ) {
			// store string in regular expression string
			// for later use
			translations = arguments[1];
		}
		
		//arguments[2] => link vers le dico
		argType = $.type(arguments[2]);
		if ( argType === "string" ) {
			// store string in regular expression string
			// for later use
			link = arguments[2];
		}

		// if re is not defined ( which means either an array or
		// string was passed as the first parameter ) create the
		// regular expression.
		if (!re) {
			re = new RegExp( "([^a-zA-Z])(" + reStr + ")([^a-zA-Z])", "i" );
		}
		
		var translationText = "";
	        for (var language in translations) {
	        	if (language != "each") {
	            	translationText += '<li><span class="'+ language + '_flag">' + translations[language] + '</span></li>';
	    	}
	    }

	    // iterate through each matched element
	    return this.each( function() {
	        // select all contents of this element
	        $( this ).find( "*" ).andSelf().contents()

	        // filter to only text nodes that aren't already highlighted
	        .filter( function () {
				return this.nodeType === 3 && $( this ).closest( "." + hClass ).length === 0;
			})
			
			// loop through each text node
			.each( function () {
	            var output;
	            output = this.nodeValue
	            .replace( re, '$1<' + defaultTagName + ' class="' + hClass + '">$2'+
		            '<div class="mark-traduction-hover">' +
	        		'<p>Traductions</p>' +
	        		'<ul class="list-unstyled">' +
	        		//'<li><span class="french_flag">$2</span></li>' +
	        		translationText +
	        		'</ul>' + 
	        		'<p><a href="' + link + '"><i class="fa fa-globe"></i> Dictionnaire technique multilingue</a></p></div></' + defaultTagName +'>$3' );
	            if ( output !== this.nodeValue ) {
	                $( this ).wrap( "<p></p>" ).parent()
	                    .html( output ).contents().unwrap();
	                return false;
	            }
	        });
	    });
	};

	$.fn.highlightText.defaultTagName = "span";

}));