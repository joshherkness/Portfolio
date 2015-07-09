function startCounter(startDate) {
    
		setInterval(function() {
        
   	    // Gets the current date
        var currentDate = new Date();

        // Calculates the time difference in ms
        var timeDiff = currentDate - startDate;

        // Convert to seconds
        timeDiff /= 1000;

        // Get seconds
        var seconds = Math.round(timeDiff % 60);
        // Remove seconds from the date
        timeDiff = Math.floor(timeDiff / 60);

        // Get minutes
        var minutes = Math.round(timeDiff % 60);
        // Remove minutes from the date
        timeDiff = Math.floor(timeDiff / 60);

        // Get hours
        var hours = Math.round(timeDiff % 24);
        // Remove hours from the date
        timeDiff = Math.floor(timeDiff / 24);

        // Get days
        var days = Math.round(timeDiff % 365);
        // Remove days from the date
        timeDiff = Math.floor(timeDiff / 365);

        // The rest of timeDiff is number of years
        var years = timeDiff;
                
        $(".years").text(years);
        $(".days").text(days);
        $(".hours").text(hours);
        $(".minutes").text(minutes);
        $(".seconds").text(seconds);
        
    }, 1000);
}

window.onload = function () {
    
    var startDate = new Date("September 11, 2012 12:00:00");

    setTimeout(startCounter(startDate), 1000);
    
};

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing');
	});
});