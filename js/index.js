// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {
  
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
      
      // Check all animatables and animate them if necessary
      $animatables.each(function(i) {
         var $animatable = $(this);
        if (($animatable.offset().top + $animatable.height() - 20) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
        }
      });
  
    };
    
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  
});


window.onload = function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    console.log("Burger:", burger);
    console.log("Nav:", nav);

    if (burger && nav) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            burger.classList.toggle("toggle");
        });
    } else {
        console.error("Erreur : l'élément burger ou nav-links est introuvable.");
    }
};

const container = document.querySelector('.scroll-container');
document.getElementById('prev').addEventListener('click', () => {
  container.scrollBy({ left: -600, behavior: 'smooth' });
});
document.getElementById('next').addEventListener('click', () => {
  container.scrollBy({ left: 600, behavior: 'smooth' });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card-3");

  cards.forEach(card => {
      card.addEventListener("click", function () {
          console.log("clicked"); // Vérification que l'événement fonctionne
          this.classList.toggle("flipped");
      });
  });
});

/*
  Pure CSS Select 2.0
  - No wrapper version
  - SVG icon
  - Glass style
*/
