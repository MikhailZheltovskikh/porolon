//start burger-menu
const iconMenu = document.querySelector('.header__menu-btn');
const menuBody = document.querySelector('.menu__list');
const logo = document.querySelector('.header__top-inner');
if (iconMenu){
   iconMenu.addEventListener("click", function (){
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
      logo.classList.toggle('active');
   });
};
document.addEventListener("click", function (e) {
   if (e.target !== iconMenu && e.target !== menuBody) {
      document.body.classList.remove('lock');
      iconMenu.classList.remove('active');
      menuBody.classList.remove('active');
      logo.classList.remove('active');
   }
 });

// end burger-menu
$(".header__slider-inner").slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // responsive: [
  //    {
  //       breakpoint: 1251,
  //       settings: {
  //          slidesToShow: 3
  //       },
  //    },
  //    {
  //       breakpoint: 901,
  //       settings: {
  //          slidesToShow: 2
  //       }
  //    },
  //    {
  //       breakpoint: 731,
  //       settings: {
  //          slidesToShow: 1
  //       },
  //    },
  // ]
});
$(".certificates__slider").slick({
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button class="slick-next slick-next"><img src="images/icon/slide-next.svg" alt="next arrow"></button>',
  prevArrow: '<button class="slick-prev slick-arrow"><img src="images/icon/slide-prev.svg" alt="next arrow"></button>',
  responsive: [
     {
        breakpoint: 751,
        settings: {
           slidesToShow: 2
        },
     },
     {
        breakpoint: 651,
        settings: {
           slidesToShow: 1,
           centerMode: true,
           arrows: false,
           dots: true,
        }
     },
     {
      breakpoint: 401,
      settings: {
         slidesToShow: 1,
         arrows: false,
         dots: true,
      }
   }
  ]
});

$(".popular-products__slider").slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button class="slick-next slick-next"><img src="images/icon/slide-next.svg" alt="next arrow"></button>',
  prevArrow: '<button class="slick-prev slick-arrow"><img src="images/icon/slide-prev.svg" alt="next arrow"></button>',
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        centerPadding: "50px",
        centerMode: true,
      },
    },
    {
      breakpoint: 731,
      settings: {
        slidesToShow: 1,
        centerPadding: "70px",
        centerMode: true,
      },
    },
    {
      breakpoint: 552,
      settings: {
        slidesToShow: 1,
        centerPadding: "70px",
        centerMode: true,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 441,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});
window.addEventListener("DOMContentLoaded", function() {
   [].forEach.call( document.querySelectorAll('.tel'), function(input) {
   var keyCode;
   function mask(event) {
       event.keyCode && (keyCode = event.keyCode);
       var pos = this.selectionStart;
       if (pos < 3) event.preventDefault();
       var matrix = "+7 (___)  ___ - __ - __",
           i = 0,
           def = matrix.replace(/\D/g, ""),
           val = this.value.replace(/\D/g, ""),
           new_value = matrix.replace(/[_\d]/g, function(a) {
               return i < val.length ? val.charAt(i++) || def.charAt(i) : a
           });
       i = new_value.indexOf("_");
       if (i != -1) {
           i < 5 && (i = 3);
           new_value = new_value.slice(0, i)
       }
       var reg = matrix.substr(0, this.value.length).replace(/_+/g,
           function(a) {
               return "\\d{1," + a.length + "}"
           }).replace(/[+()]/g, "\\$&");
       reg = new RegExp("^" + reg + "$");
       if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
       if (event.type == "blur" && this.value.length < 5)  this.value = ""
   }

   input.addEventListener("input", mask, false);
   input.addEventListener("focus", mask, false);
   input.addEventListener("blur", mask, false);
   input.addEventListener("keydown", mask, false)

 });

});