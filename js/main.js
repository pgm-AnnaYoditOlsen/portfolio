// Sticky header vanaf scrollen
const header = document.querySelector(".header");
const sticky = "sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 0) {
        header.classList.add(sticky);
    } else {
        header.classList.remove(sticky);
    }
});


// Fade up
let animationElements = document.querySelectorAll('.animation-element');
var window = window;
let windowHeight = window.innerHeight || document.documentElement.clientHeight;

function checkIfInView() {
  let windowTopPosition = window.pageYOffset || document.documentElement.scrollTop;
  let windowBottomPosition = windowTopPosition + windowHeight;

  animationElements.forEach(function(element) {
    let elementTopPosition = element.offsetTop;
    
    if (
      (elementTopPosition <= windowBottomPosition)
    ) {
      element.classList.add('in-view');
    } else {
      element.classList.remove('in-view');
    }
  });
}

window.addEventListener('scroll', checkIfInView);
window.addEventListener('resize', function() {
  windowHeight = window.innerHeight || document.documentElement.clientHeight;
  checkIfInView();
});

checkIfInView();


// Back to top knop
let btn = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Soepele scroll naar de elementen
const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = link.getAttribute('href');

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const targetOffsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth'
      });
    }
  });
});
