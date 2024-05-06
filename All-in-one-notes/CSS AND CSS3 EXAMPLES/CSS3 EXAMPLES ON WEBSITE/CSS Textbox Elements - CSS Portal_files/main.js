/**
 * Custom jQuery functions
 */
;(function($, undefined) {
	'use strict';

	/**
	 * Page Functions
	 */
	var page = {
		init: function() {
			// tinyNav
			if ($.fn.tinyNav) {
				$('#nav .menu').tinyNav({
					header: 'Go to...'
				});
			}

			// Call Bootstrap Tooltip
			$('[data-toggle="tooltip"]').tooltip();

			// Call Bootstrap Popover
			$('[data-toggle="popover"]').popover({
				trigger: 'hover'
			});
			
			// Menu Parent
			$('.menu ul .parent > a').append('<i class="icon-angle-right pull-right" style="margin-top: 2px;"></i>');

			// Nav Stacked Parent
			$('.nav-stacked .parent > a').append('<i class="icon-chevron-right pull-right" style="margin-top: 5px;"></i>');


			// Setup drop down menu
			$('.dropdown-toggle').dropdown();

			// Fix input element click problem
			$('.dropdown input, .dropdown label').click(function(e) {
				e.stopPropagation();
			});
		}
	};

	/**
	 * Sticky Navigation
	 */
	if ($('#nav').length > 0) {
		var sticky_navigation_offset_top = $('#nav').offset().top;
	}

	var sticky_navigation = {
		init: function() {
			if (Modernizr.mq('screen and (min-width: 768px)')) {
				var scroll_top = $(window).scrollTop();

				if (scroll_top > sticky_navigation_offset_top) {
					$('#nav').css({
						'position': 'fixed',
						'top': 0,
						'left': 0
					});

					$('.boxed nav').css({
						'left': ($(window).width() / 2 - $('.boxed nav').width() / 2) + 'px'
					});
				} else {
					$('#nav').css({
						'position': 'relative',
						'left': 'auto'
					});
				}
			}
		}
	};

	/**
	 * Accordion
	 */


	/**
	 * Prettyprint
	 */

	window.prettyPrint && prettyPrint();


	/**
	 * Overall (Background full width)
	 */
	var newHeight = 0;
	var background = {
		init: function() {
			$('.overall-full').each(function() {
				$.each($(this).children(), function() {
					newHeight += $(this).height();
				});

				$(this).height(newHeight);
				$(this).find('.inner').show();
			});
		}
	};


	/**
	 * Menu List
	 */
	var navTabs = {
		init: function() {
			$('.nav-tabs').each(function() {
				var parent = $(this).find('.parent ul'),
					link = $(this).find('.parent > a'),
					active = $(this).find('.active ul');

				parent.hide();
				active.show();

				link.click(function(event) {
					event.preventDefault();

					if (!$(this).parent().hasClass('active')) {
						link.parent().removeClass('active');
						parent.filter(':visible').slideUp('normal');

						$(this).parent().addClass('active');
						$(this).next().stop(true, true).slideDown('normal');
					} else {
						$(this).parent().removeClass('active');
						$(this).next().stop(true, true).slideUp('normal');
					}
				});
			});
		}
	};

	/**
	 * Scroll Top
	 */
	var scrollTop = {
		init: function() {
			$(window).scroll(function() {
				if ($(this).scrollTop() > 100) {
					$('.scroll-top').fadeIn();
				} else {
					$('.scroll-top').fadeOut();
				}
			});

			$('.scroll-top').click(function() {
				$('html, body').animate({
					scrollTop: 0
				}, 600);
				return false;
			});
		}
	};

	/**
	 * Ready, Load and Resize Functions
	 */
	var onReady = {
		init: function() {
			page.init();
			background.init();
			navTabs.init();
			scrollTop.init();

		}
	};

	var onLoad = {
		init: function() {
			sticky_navigation.init();

		}
	};

	var onResize = {
		init: function() {
			if (!$('html').hasClass('lt-ie9')) {
				sticky_navigation.init();
			}

			if ($.fn.isotope) {
				isotope.init();
			}
		}
	};

	var onScroll = {
		init: function() {
			if (!$('html').hasClass('lt-ie9')) {
				sticky_navigation.init();
			}
		}
	};

	$(document).ready(onReady.init);
	$(window).load(onLoad.init);
	$(window).resize(onResize.init);
	$(window).scroll(onScroll.init);
})(jQuery);
