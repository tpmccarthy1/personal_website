$(document).ready(function(){

	 //Instagram Feed

	 var userFeed = new Instafeed({
	 get: 'user',
	 userId: 12027293,
	 accessToken: '12027293.467ede5.9c0cd6283fd9406f879b71e3de7595f4',
	 useHttp: true,
	 template: '<div><a href="{{link}}"><img src="{{image}}" /></a><h3>{{caption}}</h3><h3>{{location}}</h3></div>',
	 resolution: 'standard_resolution',
	 target: 'instafeed',
	 sortBy: 'most-recent',
	 limit: 40,

	 // Function to load Instagram photos into Slick slider

	 after: function(){
	       $('#instafeed').slick({
	  		 infinite: true,
	  		 speed: 500,
	  		 fade: true,
	  		 arrows: true,
	  		 accesibility: true,
	  		 initialSlide: 1,
	  		 prevArrow: '<input type="image" class="slick-prev" id="left_button" src="imgs/back28.png" />',
	  		 nextArrow: '<input type="image" class="slick-next" id="right_button" src="imgs/right127.png" />',
	  		 responsive: [
			    {
			      breakpoint: 420,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			        fade: false,
			      }
			    },		
			  ]
	       	});
	        }
	 });

	 userFeed.run();

}
)

