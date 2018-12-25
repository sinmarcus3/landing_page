
$(document).ready(function() {
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
      // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                };
              });
            }
          }
        });
      });



$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},800);   
            }
        }); 
    });
});



// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            document.getElementById("navButton").className += " navButtonBorder";
        } else { 
            x.className = x.className.replace(" w3-show", "");
            document.getElementById("navButton").className = document.getElementById("navButton").className.replace(" navButtonBorder", "");
        }
    }

// Get the video
var video = document.getElementById("myVideo");
// Get the button
var btn = document.getElementById("myBtn2");
// Pause and play the video, and change the button text
function myFunction2() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video.pause();
        btn.innerHTML = "<i class='fa fa-play'></i>";
    }
}
    
// When the user scrolls down 50px from the top of the document, resize the header
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    // When the user scrolls down 20px from the top of the document, show the button
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("myBtn").style.opacity = "0.5"
    }
    
    else {
    document.getElementById("myBtn").style.opacity = "0";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Header Sticky
var HeaderSticky = function() {
    'use strict';

    // Handle Header Sticky
    var handleHeaderSticky = function() {
    // On loading, check to see if more than 15rem, then add the class
    if ($('.js__header-sticky').offset().top > 15) {
        $('.js__header-sticky').addClass('header_shrink');
    }

    // On scrolling, check to see if more than 15rem, then add the class
    $(window).on('scroll', function() {
        if ($('.js__header-sticky').offset().top > 15) {
        $('.js__header-sticky').addClass('header_shrink');
        } else {
        $('.js__header-sticky').removeClass('header_shrink');
        }
    });
    }

    return {
    init: function() {
        handleHeaderSticky(); // initial setup for Header Sticky
    }
    }
}();

$(document).ready(function() {
    HeaderSticky.init();
});



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Javascript to organise the blog page masonry grid

    function resizeGridItem(item){
        grid = document.getElementsByClassName("grid")[0];
        rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
        item.style.gridRowEnd = "span "+rowSpan;
    }

    function resizeAllGridItems(){
        allItems = document.getElementsByClassName("item");
        for(x=0;x<allItems.length;x++){
        resizeGridItem(allItems[x]);
        }
    }

    function resizeInstance(instance){
        item = instance.elements[0];
        resizeGridItem(item);
    }

    window.onload = resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);

    allItems = document.getElementsByClassName("item");
    for(x=0;x<allItems.length;x++){
        imagesLoaded( allItems[x], resizeInstance);
    }
    