
$(window).on('load',function(){
    $('.loader .inner').fadeOut(500, function(){
        $('.loader').fadeOut(750);
    });


});






$(document).ready(function(){
 

    //super slide
    $('#slides').superslides({
        play : 3000,
        animation : 'slide',
        animation_speed : 'normal',
        animation_easing :'linear',
        pagination :  false
    });

    //type js
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ['Web Developer.', 'Android Apps Developer.','Freelancer.'],
        typeSpeed: 40,
        loop:true,
        showCursor: false,
      });

      //owl carousel
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }

        
    });


    //easy pi chart
    $('.chart').easyPieChart({
        easing:'easeInOut',
       barColor:'white',
       trackColor:false,
       scaleColor:false,
       lineWidth:4,
       size:152,
       onStep:function(from, to, percent){

        $(this.el).find('.percent').text(Math.round(percent));
       }
    });

   //counterUp js
    $('.count').counterUp({
        delay: 10,
        time: 4000
    });
    //smooth scroll
    //BOM=Browser Object Model
    //DOM=Document Object Model
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });

    //fancy app
    $('[data-fancybox]').fancybox();

     // Sort and Filter
    // Apply Filter
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });


   
});
