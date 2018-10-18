$( document ).ready(function() {
	$('#nav-bar').load('nav-bar.html');

});

function toggle_mobile_view(obj) {
  if($(obj).is(":checked")){
	document.getElementById("mobile-wrapper").style.width = "360px";
	document.getElementById("mobile-wrapper").style.height = "640px";
		
	document.getElementById("mobile-nav-bar").style.width = "342px";
	document.getElementById("mobile-nav-bar").style.top = "calc(50% - 320px)";
	document.getElementById("mobile-nav-bar").style.left = "calc(50% - 180px)";
	
		$('#mobile-nav-bar').unwrap();
  }
  else {
	document.getElementById("mobile-wrapper").style.width = "100%";
	document.getElementById("mobile-wrapper").style.height = "100%";
	
	document.getElementById("mobile-nav-bar").style.width = "100%";
	document.getElementById("mobile-nav-bar").style.top = "0";
	document.getElementById("mobile-nav-bar").style.left = "0";
  }
  
}