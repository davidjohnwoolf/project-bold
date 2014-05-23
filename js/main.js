// responsive main navigation

var mobileMenu = (function() {

	var $mainNav = $("header nav");

	$(".menu-icon").on("click", function() {
		$mainNav.slideToggle(300);
	});

	$(window).resize( function() {
		if ($(".menu-icon").css("display") == "none") {
			$mainNav.show();
		} else {
			$mainNav.hide();
		}
	})

}());

// load banner image if browser is wide enough
// (need to fix innerwidth to exactly 900 and fix problem with browser resize)

var bannerImage = (function() {

	if ($(window).innerWidth()>885) {
		$(".banner-wrap section").prepend("<img class='banner-image' src='img/responsive-web-design.jpg'>");
	}

	$(window).resize( function() {
		if ($(".banner-image").length) {
			if ($(window).innerWidth()>885) {
				return
			} else {
				$(".banner-image").remove();
			}
		}
		if ($(window).innerWidth()>885) {
			$(".banner-wrap section").prepend("<img class='banner-image' src='img/responsive-web-design.jpg'>");
		}
	})

}());

// support placeholders cross-browser

$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();