var slideIndex = 1;
	showDivs(slideIndex);

	function slidermove(n) {
  showDivs(slideIndex = n);

  function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slid");
  var dots = document.getElementsByClassName("btns");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" style", "background-color:white;");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "  white"
}
}