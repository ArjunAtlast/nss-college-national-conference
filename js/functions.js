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
$.fn.scrollTo = function($element, speed, offset) {
  $(this).click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $element.offset().top + offset
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
* @summary Remove class on window scroll
* @param {string} attrName
* @param {number} topBound
* @param {number} bottomBound
**/
$.fn.removeAttrOnScroll = function(attrName, topBound, bottomBound){
  var $self = $(this);
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    if(top >= topBound && top <= bottomBound) {
      $self.removeAttr(attrName);
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
    var navBarHeight = $("#navbar-primary").height();
    $(this).scrollTo(target, speed, -navBarHeight);
    var top = target.offset().top - navBarHeight;
    $(this).maintainClassOnScroll("active",top - 5, top + target.height());
  });
};

/**
* @summary makes a navbar sticky
* @param {string} className
**/
$.fn.sticky = function(fixedClass, staticClass) {
  var offset = $(this).offset().top + $(this).height();

  $(this).addClassOnScroll(fixedClass, offset, $(document).height()+100);
  $(this).removeClassOnScroll(staticClass, offset, $(document).height()+100);
  $(this).removeClassOnScroll(fixedClass, 0, offset);
  $(this).addClassOnScroll(staticClass, 0, offset);
  $(this).removeAttrOnScroll("style", 0, offset);
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
* @summary initialize tabs Component
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

/**
* @summary initialize file-input in forms
* @param {string} file
* @param {string} text
* @param {string} trigger
**/

$.fn.initFileInput = function (file, text, trigger) {
  $(this).each(function(index){
    $(this).addActionButton(trigger, function(event, fileInput) {
      var $text = $(fileInput).find(text);
      var $file = $(fileInput).find(file);
      $file.trigger("click");
      $file.on("change input", function () {
        var fileName = $file.val().split(/(\\|\/)/g).pop();
        var fileNameSmall = (fileName.length > 10) ? fileName.substring(0,10)+"..." : fileName;
        $text.val(fileNameSmall);
      });
    });
  });
};

/**
* @summary initialize modal component
**/

$.fn.initModal = function () {
  var $modals = $(this).find(".modal");
  $trigger = $(this).find("[data-modal]");

  $trigger.click(function(event) {
    var $modal = $($(this).attr("data-modal"));
    event.preventDefault();
    $modal.addClass("open");
    $("body").addClass("no-scroll");
    $modal.addActionButton(".btn-close-modal", function(event, modal){
      event.preventDefault();
      $(modal).removeClass("open");
      $("body").removeClass("no-scroll");
    });
  });
};

function enableHamburgerMenu() {
  $("#btn-hamburger-menu").click(function(){
    $("#nav-menu").toggleClass("open");
    $("#nav-menu").focus();
    $("body").addClass("no-scroll");
  });
  $("#nav-menu").blur(function(){
    $(this).removeClass("open");
    $("body").removeClass("no-scroll");
  });
};


/**
* @summary submit form
* @param {string} url
*/

$.fn.ajaxSubmit = function(url) {
  txt_name = $(this).find("[name='name']")[0];
  txt_email = $(this).find("[name='email']")[0];
  txt_title = $(this).find("[name='title']")[0];

  $file_pdf = $(this).find('#paper_pdf')[0];
  $file_source = $(this).find('#paper_source')[0];
  isDone = false;

  $(this).submit(function(e) {

    if(!isDone) {
      e.preventDefault();

      var data = new FormData();
      data.append('name', $(txt_name).val());
      data.append('email', $(txt_email).val());
      data.append('title', $(txt_title).val());
      if($file_source.files[0]) data.append('paper_source', $file_source.files[0]);
      data.append('paper_pdf', $file_pdf.files[0]);

      var $form = $(this);
      $.ajax({
        url: url,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST',
        success: function(data) {
          isDone = true;
          $form.trigger('submit');
        }
      });
    }
  });
}
