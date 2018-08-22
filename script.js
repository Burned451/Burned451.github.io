$( document ).ready(function() {
	$('#nav-bar').load('nav-bar.html');
});

function toggle_mobile_view(obj) {
  if($(obj).is(":checked")){
	document.getElementById("mobile-1").style.width = "360px";
	document.getElementById("mobile-1").style.left = "50%";
	document.getElementById("mobile-1").style.transform = "translateX(-50%)";
	
	document.getElementById("mobile-2").style.width = "360px";
	document.getElementById("mobile-2").style.marginLeft = "auto";
	document.getElementById("mobile-2").style.marginRight = "auto";
	
    document.getElementById("mobile-3").style.width = "360px";
  }
  else {
	document.getElementById("mobile-1").style.width = "100%";
	document.getElementById("mobile-1").style.left = "0";
	document.getElementById("mobile-1").style.transform = "none";
	
	document.getElementById("mobile-2").style.width = "100%";
	document.getElementById("mobile-2").style.marginLeft = "0";
	document.getElementById("mobile-2").style.marginRight = "0";
	
    document.getElementById("mobile-3").style.width = "1000px";
  }
  
}