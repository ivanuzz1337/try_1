$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 4,
		speed:1000,
		infinite: true,
		variableWidth:true,
		responsive:[
		// {
		// 	breakpoint:1920,
		// 	settings: {
		// 		// $('.slider').slick('setPosition'),
		// 		slidesToShow: 4,
		// 	}
		// },
		{
			breakpoint:769,
			settings: {
				// $('.slider').slick('setPosition');
				slidesToShow: 3,
			}
		},{
			breakpoint:320,
			settings: {
				// $('.slider').slick('unslick'),
				slidesToShow: 1,
			}
		}
		],
		appendArrows:$('.arrows'),
});
});