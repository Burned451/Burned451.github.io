$(document).ready(function() {
	$(".title-icon").load("icons/icon-head.svg");
			
	load_page()
	
	$(window).on('hashchange', function() {		
		load_page()
	});
});

function toggle_dark_mode(obj) {
	if($(obj).is(":checked")){
		$(':root').css({'--text-black': '#f0f2f4',
						'--text-white': '#f0f2f4',
						'--text-blue': '#88b1df',
						'--text-blue-gray': '#b2b6bb',
						'--background-white': '#0f1925',
						'--background-extra-light-gray': '#090f16',
						'--background-light-gray': '#26405e',
						'--background-gray': '#335b88'});
		$('li.dropdown:nth-child(1)').css('background-image', 'url(icons/icon-menu-dark.png)');
		$('li.dropdown:nth-child(2)').css('background-image', 'url(icons/icon-gear-dark.png)');
		$('a.link-page').css('background-image', 'url(icons/icon-link-dark.png)');
	} else {
		$(':root').css({'--text-black': '',
						'--text-white': '',
						'--text-blue': '',
						'--text-blue-gray': '',
						'--background-white': '',
						'--background-extra-light-gray': '',
						'--background-light-gray': '',
						'--background-gray': ''});
		$('li.dropdown:nth-child(1)').css('background-image', 'url(icons/icon-menu.png)');
		$('li.dropdown:nth-child(2)').css('background-image', 'url(icons/icon-gear.png)');
		$('a.link-page').css('background-image', 'url(icons/icon-link.png)');
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
			$("#dynamic-content").load("pages/gallery.html");
			break;
		case '#links':
			$('title').html('Edward Boguslavsky - Links');
			$("#dynamic-content").load("pages/links.html");
			break;
		case '#about':
			$('title').html('Edward Boguslavsky - About');
			$("#dynamic-content").load("pages/about.html");
			break;
		case '#eportfolio':
			$('title').html('Edward Boguslavsky - ePortfolio');
			$("#dynamic-content").load("pages/eportfolio.html");
			break;
		default:
			$('title').html('Edward Boguslavsky - Home');
			$("#dynamic-content").load("pages/home.html");
	}
}