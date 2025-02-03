const fixedBox = document.querySelector('#dataBox')
const sticky = fixedBox.offsetTop

window.addEventListener('scroll', () => {
  if (window.pageYOffset > sticky){
    fixedBox.classList.add('sticky');
  } else {
    fixedBox.classList.remove('sticky');
  }
})

$(document).ready(function(){
  $('.photos').slick({
    accessibility:true,
    arrows:true,
    cssEase:'ease',
    dots:false,
    slidesToShow: 3,
    variableWidth: true,
  });
});