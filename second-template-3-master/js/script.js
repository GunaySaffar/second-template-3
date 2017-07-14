var slid=document.querySelector('.polosa');
var btn=document.querySelectorAll('.btns');

var count=0;
 function slidermoveLeft() {
 slid.style.left="-475px";
 btn[0].style.background = "black";
 btn[1].style.background="none";

 }
  function slidermoveRight() {
  slid.style.left="0px";
  btn[0].style.background = "none";
  btn[1].style.background="black";
 }
 function autoMove(){
  if (count==0) {
  slid.style.left="-475px";
  btn[0].style.background = "black";
  btn[1].style.background="none";
  count=1;
  }
  else {
  slid.style.left="0px";
  btn[0].style.background = "none";
  btn[1].style.background="black";
  count=0;
  }
 }
 setInterval(autoMove,2000)


// =================slider section =====================================================

var polosa2=document.querySelector('.polosaBox');
var btn2=document.querySelectorAll('.btns2');
var count=0;

function goLeft() {
 polosa2.style.left="-1154px";
 btn2[0].style.background="black";
 btn2[1].style.background="none";

}
function goRight() {
 polosa2.style.left = "0px";
 btn2[0].style.background="none";
 btn2[1].style.background="black";
}

function autoMove2() {
  if (count==0) {
  polosa2.style.left="-1152px";
  btn2[0].style.background="black";
  btn2[1].style.background="none";
  count=1;
  }
  else{
 polosa2.style.left = "0px";
 btn2[0].style.background="none";
 btn2[1].style.background="black";
 count=0;
  }
}
setInterval(autoMove2,2000)

// ============peopleSlideSection================================================
var polosa3=document.querySelector(".polosaPeople");
var btn3=document.querySelectorAll(".btns3");
var count=0;

function left() {
  polosa3.style.left="-1238px";
  btn3[0].style.background = "black";
  btn3[1].style.background = "none";
  // body...
}
function right() {
  polosa3.style.left="0px";
  btn3[0].style.background = "none";
  btn3[1].style.background = "black";
  // body...
}
function autoMove3() {
  if (count==0) {
  polosa3.style.left="-1238px";
  btn3[0].style.background="black";
  btn3[1].style.background="none";
  count=1;
  }
  else{
 polosa3.style.left = "0px";
 btn3[0].style.background="none";
 btn3[1].style.background="black";
 count=0;
  }
}
setInterval(autoMove3,2000)

























