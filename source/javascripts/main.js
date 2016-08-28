/*
 * main.js
 */

//= require_tree .

window.onload = function() {

    // Highlight.js
    $(document).ready(function() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });


    // Start date for counter ( The date that I began programming )
    var startDate = new Date("September 30, 2012 12:00:00");

    // Initially update the interface, then continuousely update every second.
    updateCounter(startDate);
    setInterval(function() {
        updateCounter(startDate);
    }, 1000);

    $('#seconds').show();
    $('#broken').hide();

    $('#textbox1').val($(this).is(':checked'));

    $('#format-checkbox').change(function() {
        if ($(this).is(":checked")) {
            $(this).attr("checked", "false");
            $('#seconds').hide();
            $('#broken').show();
        } else {
            $('#seconds').show();
            $('#broken').hide();
        }
        $('#format-checkbox').val($(this).is(':checked'));
    });

    //
    // $('.counter-wrapper').mouseenter(function() {
    //     $('#seconds').hide();
    //     $('#broken').show();
    // });
    //
    // $('.counter-wrapper').mouseleave(function() {
    //     $('#seconds').show();
    //     $('#broken').hide();
    // });
};

/*
 * DOM component creating function
 */
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

    card += '<div class="tag tag--white-opaque">' + tag + '</div>';

    card += '</div>';

    return card;
}

function updateCounter(startDate) {

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
}
