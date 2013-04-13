steal(
	'jquery/lang/openajax',
	'jquery/controller/subscribe').then(
    function($){
		$('#login').click(function(e) {
			arrow = 'largeLeftArrow';
			var searchSection = $('#welcomeSearch').detach().insertAfter('#introBlurb');
			searchSection.find('#searchForm').removeClass('floatLeft').addClass('floatRight');
			searchSection.find('#postForm').removeClass('floatRight').addClass('floatLeft');
			$('.arrowBreak').hide();
			$('.horizontalArrow').css({'width': '80px', 'height': 0});
			$('.containerRow[id!=introBlurb]').hide();
			$('#greenBlock').animate({
				height: '85px'
			  }, 500, function() {
				  setTimeout(function() {
					$('#arrowDown').animate({
						height: '142px'
					  }, 1000, function() {
						// Animation complete.
					  });
					}, 100);
			  });
			  
			  $('#introBlurb').animate({
				opacity: 0
			  }, 1000, function() {
				  $('#introBlurb').hide();
				  $('#welcomeSearch').css({'opacity': 0, 'display': 'block'});
				$('#welcomeSearch').animate({
					opacity: 1
				  }, 1000, function() {
					// Animation complete.
				  });
			  });
			  $('#smallDownArrow').animate({
				opacity: 0
			  }, 1000, function() {
				  
			  });
			  
			  $('#rightAngle').animate({
				opacity: 0
			  }, 1000, function() {
				  
			  });
		});
		
		function showArrowBreak(container, nextSection, arrow){
			var nextArrow = container.closest('.containerRow').nextAll('.arrowBreak')[0];
			$(nextArrow).show().css('opacity', 1);
			var horizontalArrow = $(nextArrow).find('.' + arrow);
			horizontalArrow.animate({
			  height: '115px'
			}, 500, function() {
			  $('html, body').animate({scrollTop:$(document).height()}, 'slow'); 
			});
			setTimeout(function() {
				horizontalArrow.animate({
				  width: '606px'
				}, 500, function() {
				  
				});
			}, 300);
			
			setTimeout(function() {
				horizontalArrow.animate({
				  height: '251px'
				}, 1000, function() {
					$('#' + nextSection).css({'opacity': 0, 'display': 'block'});
				  $('#' + nextSection).animate({
					opacity: 1
				  }, 500, function() {
					  $('html, body').animate({scrollTop:$(document).height()}, 'slow');
					  if(nextSection == 'activityListSection'){
							//PUBLISH EVENT FOR MAP CONTROLLER TO SUBSCRIBE TO AND CREATE MAP
					  }
				  });
				});
			}, 300);
		}
		
		var arrow = 'largeLeftArrow';
		
		$('#searchActivities').click(function(e) {
			showArrowBreak($(this), 'activityListSection', arrow);
		});
		
		$('#joinBtn').click(function(e) {
			showArrowBreak($(this), 'registerContainer', 'largeRightArrow');
		});
		
		$('#headerJoin').click(function(e) {
			$('#about').trigger('click');
			$('#joinBtn').trigger('click');
		});
		
		$('#registerBtn').click(function(e) {
			showArrowBreak($(this), 'welcomeSearch', 'largeLeftArrow');
			arrow = 'largeRightArrow';
			var searchSection = $('#welcomeSearch').detach().insertAfter('#searchSection');
			searchSection.find('#searchForm').removeClass('floatRight').addClass('floatLeft');
			searchSection.find('#postForm').removeClass('floatLeft').addClass('floatRight');
		});
		
		$('#about').click(function(e) {
			$('.horizontalArrow').css({'width': '80px', 'height': 0});
			$('.containerRow[id!=introBlurb]').animate({
			  opacity: 0
			}, 0, function() {
				$('#introBlurb').css({'opacity': 0, 'display': 'block'});
				$('#introBlurb').animate({
				  opacity: 1
				}, 0, function() {
					$('.containerRow[id!=introBlurb]').hide();
				});
				
				$('#smallDownArrow').animate({
					opacity: 1
				  }, 0, function() {
					  
				  });
				  
				  $('#rightAngle').animate({
					opacity: 1
				  }, 0, function() {
					  
				  });
			});
			
			$('#greenBlock').animate({
			  opacity: 0
			}, 0, function() {
				$('#greenBlock').css({'height': 0, 'opacity':1});
			});
			
			$('#arrowDown').animate({
			  opacity: 0
			}, 0, function() {
				$('#arrowDown').css({'height': 0, 'opacity':1});
			});
			  
			$('.arrowBreak').animate({
			  opacity: 0
			}, 0, function() {
				$('.arrowBreak').hide();
			});
				
			
		});
});