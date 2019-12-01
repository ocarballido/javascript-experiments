$(document).ready(function(){

	$('main #os-content').load('ajax/../content-home.html');

	// ----- Action items
	function contentAnimation() {
		var opacityAction = $('.opacity-action');
		opacityAction.on("mouseover", function() {
			opacityAction.find('.action-item').addClass("opacity-1 item-scale");
			$(this).find('.action-item').removeClass("opacity-1 item-scale");
			console.log('dsdsdsd');
		});
		opacityAction.on("mouseout", function() {
			opacityAction.find('.action-item').removeClass("opacity-1 item-scale");
		});
	}
	// ----- Action items
	contentAnimation();

	// ----- Loading content
	var menuPressed;
	var spinner = $('.spinner');
	$('#sidebarMenuToggler nav a').click(function() {
		event.preventDefault();

		// ----- Menu mobile collapsed
		var menuCollapsed = $('#sidebar-menu button.navbar-toggler').hasClass('collapsed');
		if(!menuCollapsed) {
			$('#sidebar-menu button.navbar-toggler').addClass('collapsed');
			$('#sidebar-menu .navbar-collapse').removeClass('show');
		}
		console.log(menuCollapsed);
		// ----- Menu mobile collapsed
		$('#sidebar-menu button.navbar-toggler');
		menuPressed = $(this).attr('data-menu');
		spinner.removeClass('d-none');
		switch(menuPressed) {
			case 'os-home-mobile':
				$(".sidebar-menu .nav .nav-link").removeClass("active");
				$('main #os-content').empty();
				$('main #os-content').load('ajax/../content-home.html', function() {
					// ----- Remove loader
					spinner.addClass('d-none');
					// ----- Remove loader
				});
				break;
			case 'os-home':
				$(".sidebar-menu .nav .nav-link").removeClass("active");
				$('main #os-content').empty();
				$('main #os-content').load('ajax/../content-home.html', function() {
					// ----- Remove loader
					spinner.addClass('d-none');
					// ----- Remove loader
				});
				break;
			case 'os-habilities':
				$(".sidebar-menu .nav .nav-link").removeClass("active");
				$(".sidebar-menu .nav .nav-link[data-menu='os-habilities']").addClass("active");
				$('main #os-content').empty();
				$('main #os-content').load('ajax/../content-habilities.html', function() {
					// ----- Remove loader
					spinner.addClass('d-none');
					// ----- Remove loader

					// ----- Action items
					contentAnimation();
					// ----- Action items

					// Progress bar
					$('.progress .progress-bar').each(function() {
						var percent = $(this).attr('aria-valuenow');
						$(this).css('width', percent + '%');
						$(this).find('.progress-dot').css('left', percent + '%');
					});
					// Progress bar

					// Button
					$('.project-button').on('click', function() {
						spinner.removeClass('d-none');
						$('main #os-content').empty();
						$('main #os-content').load('ajax/../content-portfolio.html', function() {
							// ----- Remove loader
							spinner.addClass('d-none');
							// ----- Remove loader
						});
					});
					// Button
				});
				break;
			case 'os-explore':
				$(".sidebar-menu .nav .nav-link").removeClass("active");
				$(".sidebar-menu .nav .nav-link[data-menu='os-explore']").addClass("active");
				$('main #os-content').empty();
				$('main #os-content').load('ajax/../content-trayectory.html', function() {
					// ----- Remove loader
					spinner.addClass('d-none');
					// ----- Remove loader
				});
				break;
			case 'os-portfolio':
				$(".sidebar-menu .nav .nav-link").removeClass("active");
				$(".sidebar-menu .nav .nav-link[data-menu='os-portfolio']").addClass("active");
				$('main #os-content').empty();
				$('main #os-content').load('ajax/../content-portfolio.html', function() {
					$('img').on('load', function() {
						// ----- Remove loader
						spinner.addClass('d-none');
						portfolioFilter();
						// ----- Remove loader
					});
					// ----- Remove loader
				});
				break;
		}
	});
	// ----- Loading content

	// ----- Copyright -----
	var date = new Date()
		year = date.getFullYear();

	$(".currentYear").text(year);
	// ----- Copyright -----

	// ----- Filter
	function portfolioFilter() {
		$('#filters button').click(function(){
			event.preventDefault();
		})
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.element-item',
			layoutMode: 'fitRows'
		});
		// filter functions
		var filterFns = {
			// show if number is greater than 50
			numberGreaterThan50: function() {
				var number = $(this).find('.number').text();
				return parseInt( number, 10 ) > 50;
			},
			// show if name ends with -ium
			ium: function() {
				var name = $(this).find('.name').text();
				return name.match( /ium$/ );
			}
		};
		// bind filter button click
		$('.filters-button-group').on( 'click', 'button', function() {
			var filterValue = $( this ).attr('data-filter');
			// use filterFn if matches value
			filterValue = filterFns[ filterValue ] || filterValue;
			$grid.isotope({ filter: filterValue });
			$('.filters-button-group button').removeClass('active');
			$(this).addClass('active');
		});
		// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$( this ).addClass('is-checked');
			});
		});
	}
	// ----- Filter
});