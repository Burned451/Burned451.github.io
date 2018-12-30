$(document).ready(function() {
	load_page()
	
	$(window).on('hashchange', function() {		
		load_page()
	});
});

function toggle_dark_mode(obj) {
	if($(obj).is(":checked")){
		$(':root').css({'--text-black': '#f0f2f4',
						'--text-blue': '#88b1df',
						'--text-blue-gray': '#9da2a9',
						'--background-white': '#0f1925',
						'--background-extra-light-gray': '#090f16',
						'--background-light-gray': '#26405e',
						'--background-gray': '#335b88'});
		
	} else {
		$(':root').css({'--text-black': '#f0f2f4',
						'--text-blue': '#88b1df',
						'--text-blue-gray': '#9da2a9',
						'--background-white': '#0f1925',
						'--background-extra-light-gray': '#090f16',
						'--background-light-gray': '#26405e',
						'--background-gray': '#335b88'});
	}
}

function toggle_mobile_view(obj) {
	if($(obj).is(":checked")){
		$("#mobile-wrapper").css({'width': '360px',
								  'height': '640px'});
	} else {
		$("#mobile-wrapper").css({'width': '',
								  'height': ''});
	}
}

function load_page() {
	$("#dynamic-content").empty();
	switch(window.location.hash) {
		case '#gallery':
			$('title').html('Edward Boguslavsky - Gallery');
			$('.header-title').html('Gallery');
			$('.header-subtitle').html('Photographs I have taken in my spare time');
			$("#dynamic-content").load("pages/gallery.html");
			break;
		case '#links':
			$('title').html('Edward Boguslavsky - Links');
			$('.header-title').html('Links');
			$('.header-subtitle').html('Other enjoyable media to keep you busy');
			$("#dynamic-content").load("pages/links.html");
			break;
		case '#about':
			$('title').html('Edward Boguslavsky - About');
			$('.header-title').html('About');
			$('.header-subtitle').html('Additional information about the creator');
			$("#dynamic-content").load("pages/about.html");
			break;
		default:
			$('title').html('Edward Boguslavsky - Home');
			$('.header-title').html('Home');
			$('.header-subtitle').html('An introduction to the site\'s content');
			$("#dynamic-content").load("pages/home.html");
	}
}