$(document).ready(function(){
    $('.skills-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

function changeColor(){
  if (document.getElementById('body').style.backgroundColor === 'cadetblue') {
    document.getElementById('body').style.backgroundColor = 'ivory'
  }
  else{
    document.getElementById('body').style.backgroundColor = 'cadetblue';
  }
  
}