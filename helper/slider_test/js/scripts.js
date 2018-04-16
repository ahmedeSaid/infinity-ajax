/*-----------------------------------------------------------------------------------*/
/*	SLIDER
/*-----------------------------------------------------------------------------------*/ 

$(document).ready(function() {
				
				if ($.fn.cssOriginal!=undefined)
					$.fn.css = $.fn.cssOriginal;

					$('.fullwidthbanner').revolution(
						{	
							delay:9000,												
							startwidth:960,
							startheight:450,
							hideThumbs:200,
							onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off
							navigationType:"0",					//bullet, thumb, none, both	 (No Shadow in Fullwidth Version !)
							touchenabled:"on",						// Enable Swipe Function : on/off
							fullWidth:"on"
							
						});	
			});

