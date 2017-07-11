/** Javascript File
** @author NSSCE, Palakkad
** @summary Includes all functions needed for the working of website
** @requires https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
**/

$(document).ready(function() {

  $("#navbar-primary .navbar-nav li a").scrollyLink(1000);
  $('#navbar-primary').stickyNavbar("fixed");

});
