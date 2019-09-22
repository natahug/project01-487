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

// $(document).ready(function(){
//   console.log("hey");
  // $("#first").hide();

  // $("button").click(function(){
  //     theCount += 1;
  //     console.log("clicked " + theCount);
  //     $("#first").hide();

    $(document).ready(function(){
      
      $("#next").click(function(){
        $("#first-an").hide();
        $("#second-an").show();
      });
      $("#prev").click(function(){
        $("#first-an").show();
        $("#second-an").hide();
      })
      $(".channel").mouseenter(function(){
        $(".pop").css("display","block");
      })
      $(".channel").mouseleave(function(){
        $(".pop").css("display","none");
      })

      $(".ref").mouseenter(function(){
        $(".pop2").css("display","block");
      })
      $(".ref").mouseleave(function(){
        $(".pop2").css("display","none");
      })
    });