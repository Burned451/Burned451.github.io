const mobile_width = 360;
const mobile_height = 640;

$( document ).ready(function() {
	$.get("nav-bar.html", function(data) {
		$("#nav-bar").replaceWith(data);
	});
});

function toggle_mobile_view(obj) {
	var mobileWrapper = $("mobile-wrapper");
	if($(obj).is(":checked")){
		mobileWrapper.css({'width': '360px', 'height': '640px'});
	}
	else {
		mobileWrapper.css({'width': '', 'height': ''});
	}
}