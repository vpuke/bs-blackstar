// Hides the navbar when scrolling down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation-bar").style.top = "0";
  } else {
    document.getElementById("navigation-bar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
} 

// Makes the slide bar / vertical scroll slide show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("color-preview-card");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Parallax function 

$(document).ready(function() {
  var onScroll = function() {
    var scrollTop = $(this).scrollTop();
    $('.section-3').each(function(index, elem) {
      var $elem = $(elem);
      $elem.find('img').css('top', scrollTop - $elem.offset().top);
    });
  };
  onScroll.apply(window);
  $(window).on('scroll', onScroll);
});



