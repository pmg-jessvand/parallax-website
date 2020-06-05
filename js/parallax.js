function parallax(element, distance, speed) {
  const item = document.getElementById(element);
  item.style.transform = `translateX(${distance * (speed*2.5)}px)`;
}

function opacity(element, distance) {
  const section = document.getElementById(element);
  section.style.opacity = `${ distance / 2200}`;
}

function parallaxY(element, distance, speed) {
  const item = document.getElementById(element);
  item.style.transform = `translateY(${distance * speed/2}px)`;
}

window.addEventListener("scroll", function() {
  parallax("blue_pill", window.scrollY, .1);
  parallax("red_pill", window.scrollY, -.1);
  parallax("smith", window.scrollY, -.1);
  parallax("neo", window.scrollY, .1);
  opacity("quote", window.scrollY);
  parallaxY("city_neo", window.scrollY, -.1);
})