

/******** Swiper View ********/
function myFunction(x) {
  if (x.matches) { // If media query matches
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: true,
    });
  } else {
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
    });
  }
}

var x = window.matchMedia("(max-width: 720px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes      




/*==================== SHOW SCROLL TOP1====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


   