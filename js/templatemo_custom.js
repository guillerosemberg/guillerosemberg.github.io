"use strict";

jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	$(".main_menu a, .responsive_menu a").click(function(){
		var $this=$(this);
		//Switch active button
		$(".main_menu a, .responsive_menu a").not($this).removeClass('active');
		$this.addClass('active');
		//Switch active content
		var linkClass=$this.attr('class');
		var id=(/.*show-(\d+).*/g).exec(linkClass)[1];
		$("#menu-container .content").hide();
		$("#menu-container #menu-"+id).addClass("animated fadeInDown").show();
		//Switch page specific content
		if(linkClass.indexOf('templatemo_page5')>=0){
			loadScript();
		}
		return false;
	});

	$( window ).load(function() {
		//Select inital page
		$("a.show-2").addClass('active');
		$("#menu-container .homepage").hide();
	});



	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});


function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(16.8251789,96.1439764)
    };
    var map = new google.maps.Map(document.getElementById('templatemo_map'),  mapOptions);
}
