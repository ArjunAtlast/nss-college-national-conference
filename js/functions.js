/** Javascript File
** @author NSSCE, Palakkad
** @summary Includes all functions needed for the working of website
** @requires https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
**/

/**
* @summary Scroll to an element on click
* @param {Object} $element
* @param {Number} speed
**/
$.fn.scrollTo = function($element, speed) {
  $(this).click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $element.offset().top
    }, speed);
  });
};

/**
* @summary Make a link scroll to the inline element
* @param {Number} speed
**/
$.fn.scrollyLink = function(speed) {
  $(this).each(function(index) {
    var target = $($(this).attr("href"));
    $(this).scrollTo(target, speed);
  });
};


$.fn.addClassOnScroll = function(class, offset){
  
}
