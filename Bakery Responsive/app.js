var menubar = document.querySelector(".menubar");
var headermenu = document.querySelector(".header-menu");

menubar.addEventListener(
    'click', function(){
        headermenu.classList.toggle("showheadermenu");
    }
)

var whiteheader = document.querySelector(".whiteheader");
var header = document.querySelector(".header");

window.addEventListener(
    'scroll', 
    () => {
        if (window.scrollY >= 52.4) {
            whiteheader.classList.add("showwhiteheader");
            header.classList.add("stickyheader");
        }else{
            whiteheader.classList.remove("showwhiteheader");
            header.classList.remove("stickyheader");

        }
    }
)
$('.slider').slick(
    {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        dots: true,
        arrows: false,
        speed: 3000,
        responsive: [
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    }
);