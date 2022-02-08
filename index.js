$(document).ready(function(){
    $("#preloader").fadeOut(500);
    document.getElementById('preloader').style.display = "none"
     $(window).scroll(function(event){
        let val = $(window).scrollTop()
        if (val>600) {
            $('#navmain').addClass('bg-gradient-to-b from-slate-900')
          
        }
        else{
            $('#navmain').removeClass('bg-gradient-to-b from-slate-900')
        }
     })
    $('#navopener').click(function(){
     $('#navul').slideToggle()
    })
    var brandcarou = $('.brandcarousel')
    brandcarou.owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            600:{
                items:1
            },
            800:{
                items: 4
            },
            1200:{
                items: 4
            }
        }
    });
    $('.nextowl').click(function() {
        brandcarou.trigger('next.owl.carousel',[300]);
    })
    // Go to the previous item
    $('.prevowl').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        brandcarou.trigger('prev.owl.carousel', [300]);
    })
    var caroutrend = $('#trendingcarou')
    caroutrend.owlCarousel({
        loop:true,
        margin:10,
        items:1,
        dots:true,
        autoPlay:true,
        nav: true,
        dotsEach: true  
    })

    anime({
        targets: '.st0',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });
})