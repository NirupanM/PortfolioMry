$(document).ready(function() {

'use strict';

//$( '#timeline' ).on( 'click', function( event ) {

 // $('#timeline').trigger('mouseover');

//});



$("#timeline").click(function(){

	$("#timeline-sec").removeClass("hidden");
	$("#resume-sec").addClass("hidden");

	});


$("#resume").click(function(){

$("#timeline-sec").addClass("hidden");
	$("#resume-sec").removeClass("hidden");

	});

});