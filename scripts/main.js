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
    var color = ["cadetblue", "darkgray", "ivory", "cornflowerblue"];

    if (color.includes(document.getElementById('body').style.backgroundColor)) {
        document.getElementById('body').style.backgroundColor = color[Math.floor(Math.random() * color.length)];

    } else{
     document.getElementById('body').style.backgroundColor = 'ivory';
   }
}