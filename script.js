// Include jQuery


$( document ).ready(function() {
	var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js');
document.head.appendChild(jQueryScript);
	
$('#nav-bar').load('nav-bar.html');
});