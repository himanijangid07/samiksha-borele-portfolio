(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

})(jQuery);

const text = "Hello there! This is Samiksha Borele."; // The text to type
const typingSpeed = 100; // Typing speed in milliseconds
const delayBeforeRestart = 2000; // Delay before restarting typing

let i = 0; // Index of the current character
let isDeleting = false; // Typing or deleting state
const typingEffectElement = document.getElementById("typing-effect");

function typeWriter() {
    // Get current text for typing/deleting
    const currentText = text.substring(0, i);
    typingEffectElement.innerHTML = currentText;

    // Adjust cursor blinking animation
    typingEffectElement.style.borderRight = "2px solid black";

    if (!isDeleting) {
        // Typing forward
        if (i < text.length) {
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Finished typing, start deleting after a delay
            isDeleting = true;
            setTimeout(typeWriter, delayBeforeRestart);
        }
    } else {
        // Deleting backward
        if (i > 0) {
            i--;
            setTimeout(typeWriter, typingSpeed / 2); // Faster deleting speed
        } else {
            // Reset and start typing again
            isDeleting = false;
            setTimeout(typeWriter, typingSpeed);
        }
    }
}

// Start the typing effect
window.onload = typeWriter;