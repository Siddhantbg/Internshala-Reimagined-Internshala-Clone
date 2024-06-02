const lis = document.querySelectorAll("li");
const lbs = document.querySelectorAll(".lb");
const ul = document.querySelector("ul");
const lineDash = document.querySelector(".line-dash");

var dashOrigin = -35; //pixels
var selectedLi = -35; //pixels
var speed = 500; //move this many pixels in one second.
var distance = 0;
var time = 0;

// initial animation and class for HOME
gsap.to(lbs[0], 0.6, {
    y: -43,
    ease: "bounce.out",
    delay: 1
});

lis[0].classList.add("active");

//push all the bottom lines down.
function pushDownLb() {
    for (let k = 0; k < lbs.length; ++k)
        gsap.to(lbs[k], 0.5, {
            y: 0,
            ease: "power3.out"
        });
}

ul.addEventListener(
    "mouseleave",
    function(e) {
        // to avoid a bug in chrome that sometimes triggers mouseleave on click
        // and the relatedTarget comes up null
        if (e.relatedTarget) {
            distance = Math.abs(dashOrigin - selectedLi);
            time = distance / speed;
            dashOrigin = selectedLi;
            if (time) {
                // overlaping tweens would give a zero time
                gsap.to(lineDash, time, {
                    strokeDashoffset: selectedLi,
                    ease: "bounce.out"
                });
            } //if
        } //if
    },
    false
);

for (let i = 0; i < 4; ++i) {
    lis[i].addEventListener("mouseover", function() {
        distance = Math.abs(-250 * i - 35 - dashOrigin);
        time = distance / speed;
        dashOrigin = -250 * i - 35;
        if (time) {
            gsap.to(lineDash, time, {
                strokeDashoffset: -250 * i - 35,
                ease: "bounce.out"
            });
        } 
    });

    lis[i].addEventListener("click", function() {
        selectedLi = -250 * i - 35;
        pushDownLb();
        let current = document.getElementsByClassName("active");
        current[0].classList.remove("active");
        lis[i].classList.add("active");
        gsap.to(lbs[i], 0.5, {
            y: -43,
            ease: "bounce.out"
        });
    });
}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var icon = document.getElementById("toggle-icon");
    if (element.classList.contains("dark-mode")) {
        icon.src = "img/light.svg"; // Change to light mode icon
    } else {
        icon.src = "img/dark.svg"; // Change to dark mode icon
    }
}
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var button = document.getElementById("toggle-button");
    var icon = document.getElementById("toggle-icon");

    if (element.classList.contains("dark-mode")) {
        button.innerHTML = '<img id="toggle-icon" src="img/sun.svg" alt="">';
    } else {
        button.innerHTML = '<img id="toggle-icon" src="img/dark.svg" alt="">';
    }
}

$("h2").each(function(index, element){
    var animation = TweenMax.to(this, 0.2, {
      className: '+= superShadow',
      marginTop: '-10px',
      marginBottom: '10px',
      ease: Power1.easeIn,
      paused:true
    });
    element.animation = animation;
  })
  
  
  $('h2').hover(function(){
   this.animation.play()
  }, function(){
   this.animation.reverse();
  })
  
 
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicators = document.querySelectorAll('.indicator');
  
  let currentIndex = 0;
  const totalCards = document.querySelectorAll('.card').length;
  const cardsPerSlide = 3;
  
  function updateSliderPosition() {
      const offset = currentIndex * (100 / cardsPerSlide);
      slider.style.transform = `translateX(-${offset}%)`;
  }
  
  function updateIndicators() {
      indicators.forEach((indicator, index) => {
          if (index === currentIndex) {
              indicator.classList.add('active');
          } else {
              indicator.classList.remove('active');
          }
      });
  }
  
  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateSliderPosition();
          updateIndicators();
      }
  });
  
  nextBtn.addEventListener('click', () => {
      if (currentIndex < Math.ceil(totalCards / cardsPerSlide) - 1) {
          currentIndex++;
          updateSliderPosition();
          updateIndicators();
      }
  });
  
  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          currentIndex = index;
          updateSliderPosition();
          updateIndicators();
      });
  });
  