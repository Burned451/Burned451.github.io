$( document ).ready(function() {
	$('#nav-bar').load('nav-bar.html');
});

function toggle_mobile_view(obj) {
  if($(obj).is(":checked")){
    document.getElementById("mobile-2").style.width = "360px";
  }
  else {
    document.getElementById("mobile-2").style.width = "100%";
  }
  
}