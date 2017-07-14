/** Javascript File
** @author NSSCE, Palakkad
** @summary Includes all functions needed for the working of website
** @requires https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
**/

var isMobile = false; //initiate as false
// device detection
if(/Mobi/i.test(navigator.userAgent)) isMobile = true;

$("body").addClass("no-scroll");
//remove preloader
$(window).on('load', function(){
    $(".preloader").remove();
    $("body").removeClass("no-scroll");
});

$(document).ready(function() {

  //navbar fixed
  $("#navbar-primary .navbar-nav li a").scrollyLink(1000);
  $("#navbar-primary").sticky("fixed", "static");

    var navTimeOut = 0;
    $(window).scroll(function(){
      clearTimeout(navTimeOut);
      $("#navbar-primary.fixed").css({
        display: 'none'
      });
      var navTimeOut = setTimeout(function() {
        $("#navbar-primary.fixed").css({
          display: 'initial',
          top: $(window).scrollTop()
        });
      }, 500);
    });

  //populate lists
  populateList();

  //card action button
  $(".speaker-card").addActionButton(".btn-open-bio", function(event, card){
    var $bio = $(card).find(".bio");
    $bio.addClass("open");
  }).addActionButton(".btn-close-bio", function(event, card){
    var $bio = $(card).find(".bio");
    $bio.removeClass("open");
  });

  //initialize tabs
  $(".tabs").initTabs();

  //initialize file-input
  $(".file-input").initFileInput(".file-input-file", ".file-input-text", ".file-input-trigger");

  //initialize modal
  $("body").initModal();

  //enable hamburgerMenu for small screens
  enableHamburgerMenu();
});


//Initialize map
function initMap() {
  var nssce = {lat: 10.824056, lng: 76.642594};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    minZoom: 15,
    center: nssce
  });
  var marker = new google.maps.Marker({
    position: nssce,
    map: map
  });
}
