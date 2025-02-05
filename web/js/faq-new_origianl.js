var currentLocation = window.location;
function functionA(){
if(currentLocation == "https://nurnet.fau.edu/contact/faqs.html#1")
{
	 document.getElementById("open1").click();
}
else if(currentLocation == "https://nurnet.fau.edu/contact/faqs.html#2")
{
	 document.getElementById("open2").click();
}
else if(currentLocation == "https://nurnet.fau.edu/contact/faqs.html#3")
{
	 document.getElementById("open3").click();
}
else if(currentLocation == "https://nurnet.fau.edu/contact/faqs.html#4")
{
	 document.getElementById("open4").click();
}
else if(currentLocation == "https://nurnet.fau.edu/contact/faqs.html#5")
{
	 document.getElementById("open5").click();
}
else if(currentLocation == "https://nurnet.fau.edu/contact/faqs.html#6")
{
	 document.getElementById("open6").click();
}
else if(currentLocation == "https://nurnet.fau.edu/contact/faqs.html#7")
{
	 document.getElementById("open7").click();
}
else if(currentLocation == "https://nurnet.fau.edu/contact/faqs.html#8")
{
	 document.getElementById("open8").click();
}

}

window.onload = functionA;


function display(){
	$('.exp').css({'display': 'none'});
}
function display2(){
	$('.exp').css({'display': 'inline-block'});
}


//-------------------------------------------------


var clicker = 1;
function imgchange(){
var image = document.getElementById('image1');
if (clicker == 1) {
image.src = "../images/contact/faq/minus.png";
clicker = clicker + 1;
}
else {
image.src = "../images/contact/faq/plus.png";
clicker = clicker - 1;
}
}

var clicker2 = 1;
function imgchange2(){
var image = document.getElementById('image2');
if (clicker2 == 1) {
image.src = "../images/contact/faq/minus.png";
clicker2 = clicker2 + 1;
}
else {
image.src = "../images/contact/faq/plus.png";
clicker2 = clicker2 - 1;
}
}

var clicker3 = 1;
function imgchange3(){
var image = document.getElementById('image3');
if (clicker3 == 1) {
image.src = "../images/contact/faq/minus.png";
clicker3 = clicker3 + 1;
}
else {
image.src = "../images/contact/faq/plus.png";
clicker3 = clicker3 - 1;
}
}

var clicker4 = 1;
function imgchange4(){
var image = document.getElementById('image4');
if (clicker4 == 1) {
image.src = "../images/contact/faq/minus.png";
clicker4 = clicker4 + 1;
}
else {
image.src = "../images/contact/faq/plus.png";
clicker4 = clicker4 - 1;
}
}

var clicker5 = 1;
function imgchange5(){
var image = document.getElementById('image5');
if (clicker5 == 1) {
image.src = "../images/contact/faq/minus.png";
clicker5 = clicker5 + 1;
}
else {
image.src = "../images/contact/faq/plus.png";
clicker5 = clicker5 - 1;
}
}

var clicker6 = 1;
function imgchange6(){
var image = document.getElementById('image6');
if (clicker6 == 1) {
image.src = "../images/contact/faq/minus.png";
clicker6 = clicker6 + 1;
}
else {
image.src = "../images/contact/faq/plus.png";
clicker6 = clicker6 - 1;
}
}

var clicker7 = 1;
function imgchange7(){
var image = document.getElementById('image7');
if (clicker7 == 1) {
image.src = "../images/contact/faq/minus.png";
clicker7 = clicker7 + 1;
}
else {
image.src = "../images/contact/faq/plus.png";
clicker7 = clicker7 - 1;
}
}

var clicker8 = 1;
function imgchange8(){
var image = document.getElementById('image8');
if (clicker8 == 1) {
image.src = "../images/contact/faq/minus.png";
clicker8 = clicker8 + 1;
}
else {
image.src = "../images/contact/faq/plus.png";
clicker8 = clicker8 - 1;
}
}



	
//----------------------------------------------
var num = 1;
function expandAllz(){
	if (num == 1) {
	var image = document.getElementById('image1');
	var image2 = document.getElementById('image2');
	var image3 = document.getElementById('image3');
	var image4 = document.getElementById('image4');
	var image5 = document.getElementById('image5');
	var image6 = document.getElementById('image6');
	var image7 = document.getElementById('image7');
	var image8 = document.getElementById('image8');
	image.src = "../images/contact/faq/minus.png";
	image2.src = "../images/contact/faq/minus.png";
	image3.src = "../images/contact/faq/minus.png";
	image4.src = "../images/contact/faq/minus.png";
	image5.src = "../images/contact/faq/minus.png";
	image6.src = "../images/contact/faq/minus.png";
	image7.src = "../images/contact/faq/minus.png";
	image8.src = "../images/contact/faq/minus.png";
	clicker = 2;
	clicker1 = 2;
	clicker2 = 2;
	clicker3 = 2;
	clicker4 = 2;
	clicker5 = 2;
	clicker6 = 2;
	clicker7 = 2;
	clicker8 = 2;
	num = 2;
	$('.showw').css({'display': 'block'});
	$('.showw2').css({'display': 'block'});
	$('.finaly').css({'font-size': '24px'});
	$('.pluslarge').css({'height': '18px'});
	$('.pluslarge').css({'width': '18px'});

}
else{
	var image = document.getElementById('image1');
	var image2 = document.getElementById('image2');
	var image3 = document.getElementById('image3');
	var image4 = document.getElementById('image4');
	var image5 = document.getElementById('image5');
	var image6 = document.getElementById('image6');
	var image7 = document.getElementById('image7');
	var image8 = document.getElementById('image8');
	image.src = "../images/contact/faq/plus.png";
	image2.src = "../images/contact/faq/plus.png";
	image3.src = "../images/contact/faq/plus.png";
	image4.src = "../images/contact/faq/plus.png";
	image5.src = "../images/contact/faq/plus.png";
	image6.src = "../images/contact/faq/plus.png";
	image7.src = "../images/contact/faq/plus.png";
	image8.src = "../images/contact/faq/plus.png";
	clicker = 1;
	clicker1 = 1;
	clicker2 = 1;
	clicker3 = 1;
	clicker4 = 1;
	clicker5 = 1;
	clicker6 = 1;
	clicker7 = 1;
	clicker8 = 1;
	num = 1;
	$('.showw').css({'display': 'none'});
	$('.showw2').css({'display': 'none'});
	$('.finaly').css({'font-size': '16px'});
	$('.pluslarge').css({'height': '14px'});
	$('.pluslarge').css({'width': '14px'});
}

}





//------------------------------------------------------
function expandAll(){
  $(".collapsible-header").addClass("active");
  $(".collapsible").collapsible({accordion: false});
   
}



function collapseAll(){
  $(".collapsible-header").removeClass(function(){
    return "active";
  });
  $(".collapsible").collapsible({accordion: true});
  $(".collapsible").collapsible({accordion: false});
	
}

$(window).scroll(function(e){ 
  var $el = $('#floater'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 && !isPositionFixed){ 
    $('#floater').css({'position': 'fixed', 'top': '0px', 'padding-right': '2%', 'padding-left': '82%'}); 
  }
  else if ($(this).scrollTop() < 200 && isPositionFixed)
  {
    $('#floater').css({'position': 'static', 'top': '0', 'padding-right': '0', 'padding-left': '0%'}); 
  } 
});