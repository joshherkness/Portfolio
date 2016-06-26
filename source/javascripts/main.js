/*
 * main.js
 */

//= require_tree .

// Counter
function startCounter(startDate) {

    setInterval(function () {

        // Gets the current date
        var now = moment();
        var end = moment(startDate);

        var timeDifferenceSeconds = now.diff(end, 'seconds');
        var timeDifferencePrecise = now.preciseDiff(end, true);

        var seconds = ' ';
        seconds = counterCardWithValue(timeDifferenceSeconds, 'Seconds', 2);

        var broken = ' ';
        broken += counterCardWithValue(timeDifferencePrecise.years, 'Years', 2);
        broken += counterCardWithValue(timeDifferencePrecise.months, 'Months', 2);
        broken += counterCardWithValue(timeDifferencePrecise.days, 'Days', 2);
        broken += counterCardWithValue(timeDifferencePrecise.hours, 'Hours', 2);
        broken += counterCardWithValue(timeDifferencePrecise.minutes, 'Minutes', 2);
        broken += counterCardWithValue(timeDifferencePrecise.seconds, 'Seconds', 2);


        $("#seconds").html(seconds);
        $("#broken").html(broken);

    }, 1000);
}

window.onload = function () {

    // Begin counter
    var startDate = new Date("September 30, 2012 12:00:00");
    setTimeout(startCounter(startDate), 1000);

    $('#seconds').show();
    $('#broken').hide();

    $('.counter-wrapper').mouseenter(function() {
        $('#seconds').hide();
        $('#broken').show();
    });

    $('.counter-wrapper').mouseleave(function() {
        $('#seconds').show();
        $('#broken').hide();
    });
};

function counterCardWithValue(value, tag, minimumSize) {
    var card = '<div class="display-card">';
    var valueString = value.toString();

    while (valueString.length < minimumSize) {
        valueString = '0' + valueString;
    }

    card += '<div class="display-content">';
    for (var i = 0; i < valueString.length; i++) {
        card += '<div class="digit-card">';
        card += '<div class="digit">';
        card += valueString[i];
        card += '</div>';
        card += '</div>';
        if (((valueString.length - 1) - i) % 3 === 0 && i != valueString.length - 1) {
            card += '<div class="comma-card">,</div>';
        }
    }
    card += '</div>';

    card += '<div class="display-tag">' + tag + '</div>' ;

    card += '</div>';

    return card;
}
