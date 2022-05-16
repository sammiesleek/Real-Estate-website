$("#featured-product .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    animateIn: 'flipInX',
    autoplay:false,
     responsive:{
            0:{
                items:1
            },
            // 600:{
            //     items:1
            // },
            850:{
                items:2
            },
           
            1200:{
                items:3
            }
        }

})

// owl carousel (agents)
$("#our-agents .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    animateIn: 'flipInX',
    autoplay:false,
     responsive:{
            0:{
                items:1
            },
            // 600:{
            //     items:1
            // },
            850:{
                items:2
            },
           
            1200:{
                items:4
            }
        }

})
// owl carousel (neighborhood)
$("#neighborhood .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    animateIn: 'flipInX',
    autoplay:false,
     responsive:{
            0:{
                items:1
            },
            // 600:{
            //     items:1
            // },
            850:{
                items:2
            },
           
            1200:{
                items:6
            }
        }

})
// owl carousel (testimony)
$("#testimony .owl-carousel").owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    animateIn: 'flipInX',
    autoplay:true,
     responsive:{
            0:{
                items:1
            },
           
          
        }

})

// recent products
$(".r-products .owl-carousel").owlCarousel({
    loop:false,
    nav:true,
    dots:false,
    animateIn: 'flipInX',
    autoplay:true,
     responsive:{
            0:{
                items:1
            },
            // 600:{
            //     items:1
            // },
            850:{
                items:2
            },
           
            1200:{
                items:4
            }
        }

})



$(document).ready(function(){





    
    // $(".owl-nav button").css('display','none')
    // $(".owl-nav button span ")
    $(".owl-nav .owl-next").html(`<i class='bx bx-right-arrow-alt'></i>`)
    $(".owl-nav .owl-prev").html(`<i class='bx bx-left-arrow-alt'></i>`)



    //  isotope filter  recent properties
    var $grid= $(".grid").isotope({
        itemSelector:'.item',
        layoutMode:'fitRows'
    })
    $(".button-group").on("click", "button",function(e){
        $(".button-group button").removeClass('active')
        var filterValue=$(this).attr('data-filter');
       $(this).addClass('active')
       $grid.isotope({filter:filterValue})
      
    })
// Property status 

    var $gRid= $(".encon").isotope({
        itemSelector:'.for-ms',
        layoutMode:'fitRows'
    })
    $(".fltbtn").on("click", "button",function(e){
        $(".fltbtnss button").removeClass('active')
        $(".for-ms").removeClass('off')
        var filterValue=$(this).attr('data-filter');
       $(this).addClass('active')
       $gRid.isotope({filter:filterValue})
      
    })


    $(".nabt .ri-menu-fill").click(function(){
        $(" .n-av").fadeToggle(200)
    })


    // $(".feat .item").each(function(i,itm){
    //     console.log($(this).attr('id'))
    //     var vl = $(this).attr('id');
    //     var tpc = $(this).$(".tpy");
    //     tpc.html('<p> '+ vl +' </p>')
    // })

  

})


//  reveal on scroll 

// ScrollReveal().reveal('.headline');





