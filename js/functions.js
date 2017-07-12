/** Javascript File
** @author NSSCE, Palakkad
** @summary Includes all functions needed for the working of website
** @requires https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
**/

/**
* @summary Scroll to an element on click
* @param {Object} $element
* @param {number} speed
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
* @param {string} className
* @param {number} topBound
* @param {number} bottomBound
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
* @param {string} className
* @param {number} topBound
* @param {number} bottomBound
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
* @param {string} className
* @param {number} topBound
* @param {number} bottomBound
**/
$.fn.maintainClassOnScroll = function(className, topBound, bottomBound){
  var $self = $(this);
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top >= topBound && top <= bottomBound) {
      $self.addClass(className);
    }
    else {
      $self.removeClass(className);
    }
  });
};

/**
* @summary Make a link scroll to the inline element
* @param {number} speed
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
* @param {string} className
**/
$.fn.sticky = function(fixedClass, staticClass) {
  var offset = $(this).offset().top + $(this).height();

  $(this).addClassOnScroll(fixedClass, offset, $("body").height()+1000);
  $(this).removeClassOnScroll(staticClass, offset, $("body").height()+1000);

  $(this).removeClassOnScroll(fixedClass, 0, offset);
  $(this).addClassOnScroll(staticClass, 0, offset);
};


/**
* @summary populates html elements with data-for attribute
**/

function populateList() {
  var $targets = $("[data-for]");
  //each target
  $targets.each(function(index){

    //retrieve data
    var dataKey = $(this).attr("data-for");
    var data = Data[dataKey];

    //process html
    var iHtml = $(this).html();
    var cHtml = data.map(function(item) {
        return compile(iHtml,item);
    }).join("\n");

    //change html to compiled Html
    $(this).html(cHtml);
  });
}

/**
* @summary compiles to html data
* @param {string} code
**/
function compile(code, data) {
  return code.replace(/\{{2}(.*)\}{2}/gm, function(v){
    var key = v.replace(/\{{2}(.*)\}{2}/gm, "$1");
    return data[key];
  }).replace(/data-compile-(.*)/gi, "$1");
}

/**
* @summary Adds an action button to an element
* @param {string} selector
* @param {Object} action
* @return {jQuery}
**/
$.fn.addActionButton = function (selector, action) {
  $(this).each(function(index) {
    var self = this;
    var $actionBtn = $(this).find(selector);
    $actionBtn.click(function(event) {
      action(event, self);
    });
  });
  return $(this);
};


/**
* @summary initialize tabs COMPONENTS
**/

$.fn.initTabs = function () {
  $(this).each(function(index){
    var $tabHost = $(this);
    var $tabList = $tabHost.find(".tab-list");
    $tabList.find("li[data-tab-content]").click(function(index) {
      //reset everything
      $tabList.find("li").removeClass("active");
      $tabHost.find(".tab-content .tab-item").removeClass('active');

      var $tabContent = $($(this).attr("data-tab-content"));
      $tabContent.addClass('active');
      $(this).addClass("active");
    });
  });
};
