const mobile_width = 360;
const mobile_height = 640;

$( document ).ready(function() {
	$.get("nav-bar.html", function(data) {
		$("#nav-bar").replaceWith(data);
	});
});

function toggle_mobile_view(obj) {
  if($(obj).is(":checked")){
	document.getElementById("mobile-wrapper").style.width = mobile_width + "px";
	document.getElementById("mobile-wrapper").style.height = mobile_height + "px";
  }
  else {
	document.getElementById("mobile-wrapper").style.width = "100%";
	document.getElementById("mobile-wrapper").style.height = "100%";
  }
  
}