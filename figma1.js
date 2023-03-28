let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
console.log(slideIndex);
// console.log(document.getElementsByClassName('slideshows'));

function showSlides(n) {
  let i; 
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
console.log(showSlides(slideIndex));

// const namePlate = document.getElementById("name")
// console.log(namePlate);
// namePlate.innerHTML = `${window.innerWidth}`
// const resize = () => {
//   namePlate.innerHTML = `${window.innerWidth}`
// }
// console.log(resize());
window.addEventListener('resize', resize)
// let slides = document.getElementsByClassName('slides')
// // console.log(slides);

// let bas = document.querySelector('button')
// console.log(bas);
// // console.log();
// console.log(bas.getBoundingClientRect());
// // console.log(bas.offsetTop);

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
// //   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
//   slides[slideIndex-1].style.display = "flex";
// //   dots[slideIndex-1].className += " active";
// }
// // console.log(showSlides(slideIndex));

// console.log(showSlides);

// let slideIndex = 1;
// slider(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   slider(slideIndex += n);
// }

// function slider(n) {
//     let mySlideShows = document.querySelectorAll('.slides')
//     console.log((mySlideShows[n].classList.contains('fade')));
//     return   mySlideShows[n].classList.add('slide1')
    
// }
// console.log(slider(slideIndex));