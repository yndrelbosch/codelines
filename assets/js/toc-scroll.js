$(document).ready(function (){
var nav_list = $("#nav"); // navigation list id
var nav_links = $("#nav a"); //links inside navigation list

$(nav_links).click(function() { //user click on toc links
event.returnValue = false; //stop browser from going to href link
$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500); //scroll smoothly to #id
});

});