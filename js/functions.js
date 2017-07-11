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
* @summary Add class on window scroll
* @param {String} className
* @param {Number} topBound
* @param {Number} bottomBound
**/
$.fn.addClassOnScroll = function(className, topBound, bottomBound){
  var $self = $(this);
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top >= topBound && top <= bottomBound) {
      $self.addClass(className);
    }
  });
};

/**
* @summary Remove class on window scroll
* @param {String} className
* @param {Number} topBound
* @param {Number} bottomBound
**/
$.fn.removeClassOnScroll = function(className, topBound, bottomBound){
  var $self = $(this);
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top >= topBound && top <= bottomBound) {
      $self.removeClass(className);
    }
  });
};

/**
* @summary Maintains class on when window scrollTop is inside a given bound
* @param {String} className
* @param {Number} topBound
* @param {Number} bottomBound
**/
$.fn.maintainClassOnScroll = function(className, topBound, bottomBound){
  var $self = $(this);
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top >= topBound && top <= bottomBound) {
      $self.addClass(className);
      console.log($self);
    }
    else {
      $self.removeClass(className);
    }
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
    $(this).maintainClassOnScroll("active",target.offset().top, target.offset().top + target.height());
  });
};

/**
* @summary makes a navbar sticky
* @param {String} className
**/
$.fn.stickyNavbar = function(className) {
  var offset = $(this).offset().top + $(this).height();
  $(this).addClassOnScroll(className, offset+100, $("body").height()+1000);
  $(this).removeClassOnScroll(className, 0, offset);
};
