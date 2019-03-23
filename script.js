$(document).ready(function() {
	$(".header-logo").load("icons/icon-logo.svg");
	$('.dropdown').append($('<div class="dropdown-icon"></div>').load("icons/icon-menu.svg"));
	$(".title-icon").load("icons/icon-head.svg");
			
	load_page()
	
	$(window).on('hashchange', function() {		
		load_page()
	});
});

$(document).scroll(function() {
	if ($('body').scrollTop() > 0) $('.header').css('background', 'rgba(0, 0, 0, 0.3)');
	else $('.header').css('background', '');
});

function toggle_dark_mode(obj) {
	if($(obj).is(":checked")){
		$(':root').css({'--text-black': '#f0f2f4',
						'--text-white': '#f0f2f4',
						'--text-color-light': '#c0acffb3',
						'--text-color-dark': '#f0ebffcc',
						'--background-white': '#0f1925',
						'--background-extra-light': '#0f0024',
						'--background-light-gray': '#26405e',
						'--background-gray': '#335b88'});
		$('a.link-page').css('background-image', 'url(icons/icon-link-dark.png)');
	} else {
		$(':root').css({'--text-black': '',
						'--text-white': '',
						'--text-color-light': '',
						'--text-color-dark': '',
						'--background-white': '',
						'--background-extra-light': '',
						'--background-light-gray': '',
						'--background-gray': ''});
		$('a.link-page').css('background-image', 'url(icons/icon-link.png)');
	}
}

function load_page() {
	$('.content').css('min-height', '0');
	switch(window.location.hash) {
		case '#gallery':
			$('title').html('Edward Boguslavsky - Gallery');
			$(".content").load("pages/gallery.html", function() {
				scroll_content();
				load_gallery();
			});
			break;
		case '#links':
			$('title').html('Edward Boguslavsky - Links');
			$(".content").load("pages/links.html", function() { scroll_content() });
			break;
		case '#about':
			$('title').html('Edward Boguslavsky - About');
			$(".content").load("pages/about.html", function() { scroll_content() });
			break;
		case '#eportfolio':
			$('title').html('Edward Boguslavsky - ePortfolio');
			$(".content").load("pages/eportfolio.html", function() { scroll_content() });
			break;
		default:
			$('title').html('Edward Boguslavsky - Home');
			$(".content").load("pages/home.html", function() {
				$(".content-tile-icon.camera").load("icons/icon-camera.svg");
				$(".content-tile-icon.project").load("icons/icon-project.svg");
				$(".content-tile-icon.about").load("icons/icon-about.svg");
			});
	}
}

function scroll_content() {
	$('.content').css('min-height', $('.content').height());
	$(window).scrollTop($('.content').offset().top - $('.header').height());
}

function load_gallery() {
	for (var i = 0; i < 12; i++)
		$('.thumbnail-wrapper.digital').append('<div class="thumbnail" style="background-image: url(images/gallery/th-' + i + '.jpg)" onclick="open_modal(this)"></div>');
	for (var i = 0; i < 3; i++)
		$('.thumbnail-wrapper.traditional').append('<div class="thumbnail" style="background-image: url(images/gallery/tr-' + i + '.png)"></div>');
}

function open_modal(img) {
	$('.modal').css('display', 'block');
	$('.modal-image').css('background-image', img.css('background-image'););
}