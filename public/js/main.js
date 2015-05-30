



/**
	This code block manages all of the user interface involved with
	the search box. There are methods that handle the fading color
	animations using jquery upon entry and exit of the cursor and
	focus on the input box.
 */
$( "#searchBox" ).on("mouseenter", function() {
 	$(this).animate({backgroundColor:'rgba(144, 144, 144, 0.7)'},500);
});

$( "#searchBox" ).on("mouseout", function() {
	if(!$(this).is(":focus"))
	{
		$(this).animate({backgroundColor:'rgba(144, 144, 144, 0.35)'},500);
	}

});

$("#searchBox").on("focusout", function(){
	$(this).animate({backgroundColor:'rgba(144, 144, 144, 0.35)'},500);
});

