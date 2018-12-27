$(document).ready(function() {
	$("#dynamic-content").load("home.html");
	
	$(".dropdown-content a").click(function(){
		$("#dynamic-content").empty();
		if ($(this).attr('href') == '#') {
			$("#dynamic-content").load("home.html");
		} else {
			$("#dynamic-content").load("about.html");
		}
	});
});

function toggle_mobile_view(obj) {
	if($(obj).is(":checked")){
		$("#mobile-wrapper").css({'width': '360px', 'height': '640px'});
	}
	else {
		$("#mobile-wrapper").css({'width': '', 'height': ''});
	}
}