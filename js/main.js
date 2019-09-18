var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex+=n);
}


function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("text-slides");
  
  if(n>slides.length){
    slideIndex = 1; //reset essentially back to image #1
}
if(n<1){
    slideIndex = slides.length; //making last image at index 0
}

for(i=0;i<slides.length;i++){
    slides[i].style.display = "none";
} //used to hide slides you don't need each individual slide

  slides[slideIndex-1].style.display = "block"; //showing 1 slide
 
}
