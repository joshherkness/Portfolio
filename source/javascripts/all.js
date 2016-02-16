//= require_tree .

$(document).ready(function(){
    //Init jQuery Masonry layout
    init_masonry();

});


function init_masonry(){
    var $container = $('.grid');

    $container.imagesLoaded( function(){
        $container.masonry({
            itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
            columnWidth: '.grid-sizer',
            percentPosition: true,
        });
    });
}
