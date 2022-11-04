/**
 * WEBSITE: https://ruxxdesing.site
 * TWITTER: https://twitter.com/ruxxdeveloper
 * FACEBOOK:https://www.facebook.com/antonio.delarua.9
 * GITHUB: https://github.com/Antonio-DelaRua
 */

(function($) {
	"use strict";

	$(".history-scroller").niceScroll({
		cursorwidth: "10px",
		background: "#0d1015",
		cursorborder: "0",
		cursorborderradius: "0",
		autohidemode: false,
		zindex: 5
	});

	// testimonial-slider
	$(".testimonials").slick({
		dots: true,
		infinite: true,
		speed: 300,
		arrows: false,
		adaptiveHeight: true,

		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	animatedProgressBar();
	windowHieght();
	previewPannel();

	function animatedProgressBar () {
		$(".progress").each(function() {
			var skillValue = $(this).find(".skill-lavel").attr("data-skill-value");
			$(this).find(".bar").animate({
				width: skillValue
			}, 1500);

			$(this).find(".skill-lavel").text(skillValue);
		});
	}

	function windowHieght(){
		if ( $(window).height() <=768 ) {
			$(".pt-table").addClass("desktop-768");
		} else {
			$(".pt-table").removeClass("desktop-768");
		}
	}

	/*----------------------------------------
		Isotope Masonry
	------------------------------------------*/
	function isotopeMasonry() {
		$(".isotope-gutter").isotope({
			itemSelector: '[class^="col-"]',
			percentPosition: true
		});
		$(".isotope-no-gutter").isotope({
			itemSelector: '[class^="col-"]',
			percentPosition: true,
			masonry: {
				columnWidth: 1
			}
		});

		$(".filter a").on("click", function(){
			$(".filter a").removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr("data-filter");
			$(".isotope-gutter").isotope({
					filter: selector,
					animationOptions: {
					duration: 750,
					easing: "linear",
					queue: false
				}
			});
			return false;
		});
	}



	var containerEl = document.querySelector('.shuffle-wrapper');
	if (containerEl) {
	  var Shuffle = window.Shuffle;
	  var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
		itemSelector: '.shuffle-item',
		buffer: 1
	  });
  
	  jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
		var input = evt.currentTarget;
		if (input.checked) {
		  myShuffle.filter(input.value);
		}
	  });
	}

	/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		Preview Pannel
	-=-=-=-=-=-=-=-=-=--=-=-=-=-=-*/
	function previewPannel() {
		$(".switcher-trigger").on("click", function() {
			$(".preview-wrapper").toggleClass("extend");
			return false;
		});
		if ($(window).width() < 768 ) {
			//$(".preview-wrapper").removeClass("extend");
		}
		
	}

	$(window).on("load", function() {
		isotopeMasonry();

		$(".preloader").addClass("active");
		setTimeout(function () {
			$(".preloader").addClass("done");
		}, 1000);
	});


	

})(jQuery);


