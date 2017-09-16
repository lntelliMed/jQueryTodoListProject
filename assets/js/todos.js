//alert("Connected"!);


// $("li").click(function(){

// 	// $(this).css("color", "gray");
// 	// $(this).css("text-decoration", "line-through");

// 	// if($(this).css("color") === "rgb(128, 128, 128)"){
// 	// 	$(this).css({
// 	// 		color: "black",
// 	// 		textDecoration: "none"
// 	// 	});
// 	// } else {
// 	// 	$(this).css({
// 	// 		color: "gray",
// 	// 		textDecoration: "line-through"
/// 	/ 	});
// 	// }

// 	$(this).toggleClass("completed");
// });


// Use on() on the parent ul instead of click() on li to handle future li's!
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// $("span").click(function(event){
// 	// $(this).parent().remove();
// 	// $(this).parent().fadeOut().remove();
// 	$(this).parent().fadeOut(function(){
// 		$(this).remove();
// 	});

// 	event.stopPropagation();
// });

// Use on() on the parent ul instead of click() on span!
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});

	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		// $("ul").append("<li><span>X</span> " + todoText + "</li>");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});
